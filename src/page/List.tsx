
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';
import styled from "styled-components";
import { theme } from "../styles/Theme";
import { Layer } from "../components/Layer";
import iconAlign from "../assets/image/icon__align.png";
import { send } from "../apis/Api";
import { BoxInner } from "../styles/GlobalStyle";

interface objectType {
	placeCode?: string;
	placeName?: string;
	productName?: string;
	price?: number;
	remarks?: string;
	standard?: string;
}
interface dataType {
	data: Array<objectType>;
}

const BoxSummary = styled.div`
	display: flex;
	justify-content: space-between;
	.text__total {
		font-size: 16px;
		strong {
			font-weight: bold;
			color: ${theme.colors.pointColor};
		}

		@media ${theme.device.mobile} {
			font-size: 14px;
		}
	}
`;
const ButtonAlign = styled.button`
	&:before {
		content: "";
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-right: 5px;
		background: url(${iconAlign}) no-repeat center / cover;
		vertical-align: top;
	}
`;
const ListUl = styled.ul`
	margin-top: 16px;
`;
const ListItem = styled.li`
	position: relative;
	padding: 20px; 
	border: 1px solid #e5e5e5;
	border-radius: 8px;
	&:not(:first-child) {
		margin-top: 16px;
	}
	@media ${theme.device.mobile} {
		padding: 16px;
	}
	.text__title {
		font-weight: 700;
		color: #333;
	}
	.text__price {
		position: absolute;
		bottom: 16px;
		right: 16px;
		font-size: 12px;
		.text__number {
			font-weight: 700;
			font-size: 18px;
			color: ${theme.colors.pointColor};
		}
	}

	.box__etc {
		max-width: calc(100% - 100px);
		margin-top: 10px;
		font-size: 14px; 
		color: #999;

		span:not(:last-child):after {
			content: "";
			display: inline-block;
			width: 1px;
			height: 10px;
			margin: 2px 5px;
			background: #e5e5e5;
			vertical-align: top;
		}
		@media ${theme.device.mobile} {
			font-size: 12px;
		}
	}
`;

const LayerItem = styled.button`
	display: block;
	width: 100%;
	padding: 16px;
	font-size: 20px;
	font-weight: 700;
	color: #333;
`;

export const List = () => {
	const layerData = ["가격 오름차순", "가격 내림차순"];
	
	const areaItemList = layerData.map((item, idx)=>{
		return(
			<LayerItem key={idx}>{item}</LayerItem>
		)
	});
	const dataArea = <div>{areaItemList}</div>

	const [open, setOpen] = useState(false);
	const openLayerEvent = () => {
		setOpen(true);
		document.querySelector("body")?.classList.add("scroll-lock");
	}

	const closeLayerEvent = () => {
		setOpen(false);
		document.querySelector("body")?.classList.remove("scroll-lock");
	}

	const [cookies, setCookie, removeCookie] = useCookies();
	const [data, setData] = useState<Array<objectType>>([]);
	const areaCode = cookies.currentCode;
	
	const dummyProduct = ["사과",	"배",	"배추",	"무",	"양파",	"상추",	"오이",	"호박",	"쇠고기",	"돼지고기",	"닭고기",	"달걀",	"조기",	"명태",	"오징어",	"고등어",	"애호박",	"냉동참조기",	"삼겹살",	"동태",	"갈치",	"참기름",	"쌀"];
	
	const {type} = useParams();
	const {type2} = useParams();
	let url;
	const getData = () => {
		console.log("type=>", type, "type2=>", type2);
		if(type === "market-tradition"){
			if(type2 === undefined){
				url="/api/livestock/autonomous/"+areaCode+"/1";
			}else{
				url="/api/livestock/place/"+areaCode+"/"+type2+"/0/32";
			}
		}else if(type === "market"){
			url="/api/livestock/autonomous/"+areaCode+"/2";
		}else if(type === "search"){
			url=`/api/livestock/search/${areaCode}/${type2}/0/32`;
		}else{
			const idx = Number(type?.split("t")[1]);
			const placeCode= dummyProduct[idx];     
			url="/api/livestock/product/"+areaCode +"/"+placeCode+"/0/32";   
		}

		send("get",url, "", {}, function(r){
			if(r.data.length>0) setData(r.data);
			console.log(r.data);
		});
	}

	useEffect(()=>{
		getData();
	},[cookies, type2]);


	return (
		<BoxInner>
			<BoxSummary>
				<p className="text__total">총 <strong>{data.length}</strong>개</p>
				<ButtonAlign onClick={openLayerEvent}>정렬</ButtonAlign>
				<Layer open={open} type={"bottomType"} headTitle="정렬" content={dataArea} closeLayerEvent={closeLayerEvent}/>
			</BoxSummary>
			<ListUl>
				{data.map((item, idx) => {
					return(
						<ListItem key={idx}>
							<NavLink to={
								type?.indexOf("market") === 0?
									"/list/" + type +"/" + item.placeCode
								: "/list/" + type +"/" + item.productName}>
								<p className="text__title">
									{type?.indexOf("market") === 0?
										(type2===undefined?item.placeName:item.productName)
									: item.productName}
								</p>
								{type?.indexOf("market") === -1 || type2!==undefined?
									<p className="text__price"><span className="text__number">{item.price?.toLocaleString()}</span>원</p>
									: null
								}
								<div className="box__etc">
									<span>{cookies.currentArea}</span>
									{type?.indexOf("market") === 0 && type2 === undefined?
										<span>{type === "1"?"시장":"마트"}</span>
										:
										<>
											<span>{item.placeName}</span>
											<span>{item.remarks}</span>
											<span>{item.standard}</span>
										</>
									}
								</div>
							</NavLink>
						</ListItem>
					)
				})}
			</ListUl>
		</BoxInner>
	)
}