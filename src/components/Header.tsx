import styled from "styled-components";
import { BoxInner } from "../styles/GlobalStyle";
import { theme } from "../styles/Theme";
import { Navigation } from "./Navigation";
import IconSearch from "../assets/image/icon__search.png";
import IconArrow from "../assets/image/icon__arrow.png";
import { Layer } from "./Layer";
import { useState } from "react";

export const Header = () => {
<<<<<<< Updated upstream
	const BoxHeader = styled.header`
=======
	const locationPath = useLocation().pathname;
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

	interface headerType{
		type?: string;
	}
	const BoxHeader = styled.header<headerType>`
>>>>>>> Stashed changes
		position: relative;
		padding: 20px 0;
		z-index: 10;
		&:before {
			content: "";
			display: block;
			position: absolute;
			top: -50px;
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

	const ButtonArea = styled.button`
		font-size: 20px;
		font-weight: 700;
		color: #fff;
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
		input[type="text"] {
			border-radius: 8px;
		}
		.button__search {
			position: absolute;
			top: calc(50% - 20px);
			right: 10px;
			width: 40px;
			height: 40px;
			background: url(${IconSearch}) no-repeat center / 30px;
		}
	`;

	const AreaUl = styled.ul`
		display: flex;
		flex-wrap: wrap;
	`;
	interface areaNum {
		idx: number
	}
	const AreaItem = styled.li<areaNum>`
		position: relative;
		width: calc(50% - 8px);
		max-width: 170px;
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
			background: url("./assets/icon__area${props=>props.idx+1}.png") no-repeat center / cover;
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

	const areaData = ["강남구", "강동구","광진구", "강북구", "강서구", "관악구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"];

	const areaItemList = areaData.map((item, idx)=>{
		return(
			<AreaItem key={idx} idx={idx}>
				<p className="box__icon"></p>
				<p className="text">{item}</p>
			</AreaItem>
		)
	});
	const dataArea = <AreaUl>{areaItemList}</AreaUl>

	const [open, setOpen] = useState(false);

	const openLayerEvent = () => {
		setOpen(true);
	}

	const closeLayerEvent = () => {
		setOpen(false);
	}

	return (
<<<<<<< Updated upstream
		<>
			<BoxHeader>
				<BoxInner>
					<ButtonArea onClick={openLayerEvent}>지역 선택</ButtonArea>
					<Navigation />
				</BoxInner>
				
				<BoxSearch>
					<input type="text" placeholder="상품명, 마트명 입력"/>
					<button type="button" className="button__search"><span className="for-a11y">검색하기</span></button>
				</BoxSearch>
			</BoxHeader>
=======
		<BoxHeader type={locationPath!=="/"?"sub":""}>
			<BoxInner>
				{locationPath !== "/"?
					<h2 className="title__h2">{titleH2}</h2>
					:
					<ButtonArea onClick={openLayerEvent}>지역 선택</ButtonArea>
				}

				<Navigation />
			</BoxInner>
>>>>>>> Stashed changes
			
			{locationPath !== "/"? null:
				<BoxSearch>
					<input type="text" placeholder="상품명, 마트명 입력" />
					<button type="button" className="button__search"><span className="for-a11y">검색하기</span></button>
				</BoxSearch>
			}
			<Layer open={open} headTitle="지역 선택" content={dataArea} closeLayerEvent={closeLayerEvent}/>
		</BoxHeader>
	)
}