
import React, { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { useCookies } from 'react-cookie';
import { theme } from "../styles/Theme";
import { BoxInner } from "../styles/GlobalStyle";
import { Navigation } from "./Navigation";
import { Layer } from "./Layer";
import { Guide } from "./Guide";
import IconSearch from "../assets/image/icon__search.png";
import IconArrow from "../assets/image/icon__arrow.png";
import { send } from "../apis/Api";

const guideData = [
	{
		text: "지역을 선택해주세요.",
		x: 40,
		y: 60
	}
];

interface headerType{
	type?: string;
}
const BoxHeader = styled.header<headerType>`
	position: relative;
	padding: 20px 0;
	z-index: 10;
	&:before {
		content: "";
		display: block;
		position: absolute;
		top: ${props=> props.type!=="sub"?"-50px":"0"};
		left: 0;
		width: 100%;
		height: 100%;
		background: ${theme.colors.pointColor};
		border-radius: 0 0 40px 40px;
		z-index: -1;
		@media ${theme.device.mobile} {
			border-radius: 0 0 20px 20px;	
		}
	}

	${BoxInner} {
		position: relative;
		display: flex;
		padding: 0 20px;
		justify-content: space-between;
		@media ${theme.device.mobile} {
			padding: 0;	
		}

		.title__h2 {
			font-size: 20px;
			font-weight: 700;
			color: #fff;
			line-height: 36px;
		}
	}

	& + #cBody {
		padding-top: ${props=> props.type!=="sub"?"":"40px"};
	}
`;

interface buttonProps{
	selectArea: boolean;
}
const ButtonArea = styled.button<buttonProps>`
	position: relative;
	font-size: 20px;
	font-weight: 700;
	color: #fff;
	z-index: ${props=>props.selectArea===undefined?7:""};
	&:after {
		content: "";
		display: inline-block;
		width: 20px;
		height: 20px;
		margin: 5px 0 0 5px;
		background: url(${IconArrow}) no-repeat center / 100%;
		vertical-align: top;
	}
`;

const BoxSearch = styled.div`
	position: relative;
	width: 550px;
	max-width: calc(100% - 50px);
	margin: 20px auto 0;
	border-radius: 8px;
	box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
	.button__search {
		position: absolute;
		top: calc(50% - 20px);
		right: 10px;
		width: 40px;
		height: 40px;
		background: url(${IconSearch}) no-repeat center / 30px;
	}
`;

const AreaUl = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
interface areaNum {
	idx: number
}
const AreaItem = styled.button<areaNum>`
	position: relative;
	width: calc(50% - 8px);
	max-width: 200px;
	padding: 10px;
	margin-top: 16px; 
	margin-right: 16px;
	border-radius: 8px;
	border: 1px solid #e5e5e5;
	box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
	text-align: center;
	&:nth-child(even) {
		margin-right: 0;
	}
	&:nth-child(-n+2) {
		margin-top: 0;
	}
	.box__icon {
		width: 100%;
		height: 150px;
		background: url("${process.env.PUBLIC_URL}/assets/icon__area${props=>props.idx+1}.png") no-repeat center / cover;
	}
	.text {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 20px;
		font-weight: 900;
		transform: translate(-50%, -50%);
	}
`;

export const Header = () => {
	const locationPath = useLocation().pathname;
	const [cookies, setCookie, removeCookie] = useCookies();
	let titleH2 = "";
	if(locationPath === "/login"){
		titleH2 = "로그인";
	}else if(locationPath === "/join"){
		titleH2 = "회원가입";
	}else if(locationPath === "/faq"){
		titleH2 = "자주 묻는 질문"
	}else if(locationPath === "/like"){
		titleH2 = "찜하기"
	}else if(locationPath === "/terms"){
		titleH2 = "정보제공처"
	}
	
	interface selectType {
		select: boolean;
		code?: string;
		area?: string;
	}
	interface areaType {
		code: string;
		area: string;
	}
	
	const [open, setOpen] = useState(false);
	const [selectArea, setSelectArea] = useState<selectType>({
		select: false,
		code: "",
		area: ""
	});
	const [areaData, setAreaData] = useState<areaType[]>();
	const [dataArea, setDataArea] = useState<ReactNode>();

	useEffect(()=>{
		if(!cookies.selectArea){
			document.querySelector("body")?.classList.add("scroll-lock");
		}else{
			document.querySelector("body")?.classList.remove("scroll-lock");
		}
		
		if(areaData === undefined){
			send("get", "/api/livestock/autonomous", "", {}, function (r) {
				setAreaData(r.data);
			});
		}

		if(dataArea === undefined){
			getAreaData();
		}
	},[cookies, areaData, dataArea]);

	const openLayerEvent = () => {
		setOpen(true);
		document.querySelector("body")?.classList.add("scroll-lock");
	}

	const closeLayerEvent = () => {
		setOpen(false);
		if(cookies.selectArea){
			document.querySelector("body")?.classList.remove("scroll-lock");
		}
	}

	const areaSelect = (event:React.MouseEvent<HTMLButtonElement>) => {
		const selectText = event.currentTarget.querySelector(".text")?.textContent?.toString();
		const selectCode = event.currentTarget.attributes.getNamedItem("data-code")?.value;
		setSelectArea({
			select: true,
			code: selectCode,
			area: selectText,
		});
		setCookie("selectArea", true);
		setCookie("currentCode", selectCode);
		setCookie("currentArea", selectText);
		setOpen(false);
	}

	const getAreaData = () =>{
		if(areaData){
			const areaItemList = areaData.map((item:any, idx:any)=>{
				if(item.autonomousName !== ""){
					return(
						<AreaItem key={idx} idx={item.autonomousCode} onClick={areaSelect} data-code={item.autonomousCode}>
							<p className="box__icon"></p>
							<p className="text">{item.autonomousName}</p>
						</AreaItem>
					)
				}
			});
			setDataArea(<AreaUl>{areaItemList}</AreaUl>);
		}
	}

	const [search, setSearch] = useState<String>();
	const navigate = useNavigate();

	const onChangeSearch = (event:React.ChangeEvent<HTMLInputElement>) =>{
		setSearch(event.currentTarget.value);
	}

	const getSearchData = (event:React.MouseEvent<HTMLButtonElement>) =>{
		navigate("/list/search/"+search);
	}

	return (
		<BoxHeader type={titleH2!==""?"sub":""}>
			<BoxInner>
				{titleH2 !== ""?
					<h2 className="title__h2">{titleH2}</h2>
					:
					<ButtonArea onClick={openLayerEvent} selectArea={cookies.selectArea}>{cookies.selectArea?cookies.currentArea:"지역선택"}</ButtonArea>
				}

				<Navigation />
			</BoxInner>
			
			{titleH2 !== ""? null:
				<BoxSearch>
					<input type="text" placeholder="상품명, 마트명 입력" onChange={onChangeSearch}/>
					<button type="button" className="button__search" onClick={getSearchData}><span className="for-a11y">검색하기</span></button>
				</BoxSearch>
			}
			<Layer open={open} headTitle="지역 선택" content={dataArea !== undefined?dataArea:"데이터 없음"} closeLayerEvent={closeLayerEvent}/>
			{locationPath === "/"?
				<Guide visible={cookies.selectArea} guideText={guideData}></Guide>
			:null}
		</BoxHeader>
	)
}