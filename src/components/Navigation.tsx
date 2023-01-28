import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { theme } from "../styles/Theme";
import logo from "../assets/image/logo-row.png";

interface gnbOpen{
	gnbOpen: boolean;
}
const BoxNavigation = styled.div<gnbOpen>`
	position: absolute;
	top: 0;
	right: 10px;
	z-index: 5;
	
	&:before {
		content: "";
		display: ${props=>props.gnbOpen?"block":"none"};
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
	}

	.logo {
		position: fixed;
		top: 10px;
		left: 80px;
		display: ${props=>props.gnbOpen?"block":"none"};
		width: 106px;
		height: 50px;
		background: url(${logo}) no-repeat center / 80px auto;
		z-index: 1;
		a {
			display: block;
			width: 100%;
			height: 100%;
			padding: 16px; 
		}
	}
`;

const ButtonMenu = styled.button<gnbOpen>`
	position: relative;
	display: block;
	padding: 0 5px;
	z-index: 1;
	.box__icon {
		position: ${props=>props.gnbOpen?"relative": null};
		width: 30px;
		height: 30px;
		span {
			position: ${props=>props.gnbOpen?"absolute": null};
			top: ${props=>props.gnbOpen?"7px": null};
			left: ${props=>props.gnbOpen?"0": null};
			display: block;
			width: 100%;
			height: 4px;
			margin: 6px 0;
			background: #fff;
			transform: ${props=>props.gnbOpen?"rotate(45deg)": null};
			transition: all ease 0.3s;
			&:nth-child(2){
				transform: ${props=>props.gnbOpen?"rotate(-45deg)": null};
			}
			&:last-child {
				display: ${props=>props.gnbOpen?"none":"block"};
			}
		}
	}
`;

const Nav = styled.nav<gnbOpen>`
	display: ${props=>props.gnbOpen?"block":"none"};
	position: fixed;
	top: 0;
	right: 0;
	width: calc(100% - 80px);
	height: 100%;
	padding-top: 100px;
	background: #fff;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 80px;
		border-radius: 0 0 0 20px;
		background: ${theme.colors.pointColor};
	}
	a {
		display: block;
		padding: 15px;
		font-size: 20px;
		font-weight: 700;
	}
`;

const BoxUtil = styled.div<gnbOpen>`
	position: fixed;
	bottom: 16px;
	right: 16px;
	display: ${props=>props.gnbOpen?"block":"none"};
	font-size: 14px;
	a {
		color: #999;
		&:not(:last-child):after {
			content: "";
			display: inline-block;
			width: 1px;
			height: 10px;
			margin: 2px 5px;
			background: #e5e5e5;
			vertical-align: top;
		}
	}
`;

export const Navigation = () => {
	const [gnbOpen, setGnbOpen] = useState(false);
		
	const gnbControlEvent = () => {
		if(!gnbOpen){
			setGnbOpen(true);
			document.querySelector("body")?.classList.add("scroll-lock");
		}else{
			setGnbOpen(false);
			document.querySelector("body")?.classList.remove("scroll-lock");
		}
	}

	return (
		<BoxNavigation gnbOpen={gnbOpen}>
			<h1 className="logo"><NavLink to="/" onClick={gnbControlEvent}><span className="for-a11y">장보러가자 로고</span></NavLink></h1>
			<ButtonMenu gnbOpen={gnbOpen} onClick={gnbControlEvent}>
				<span className="for-a11y">메뉴 열기</span>
				<div className="box__icon">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</ButtonMenu>
			<Nav gnbOpen={gnbOpen}>
				<NavLink to="/faq" onClick={gnbControlEvent}>자주 묻는 질문</NavLink>
				<NavLink to="/like" onClick={gnbControlEvent}>찜 목록</NavLink>
				<NavLink to="/terms" onClick={gnbControlEvent}>정보제공처</NavLink>
			</Nav>
			<BoxUtil gnbOpen={gnbOpen}>
				<NavLink to="/login" onClick={gnbControlEvent}>로그인</NavLink>
				<NavLink to="/join" onClick={gnbControlEvent}>회원가입</NavLink>
			</BoxUtil>
		</BoxNavigation>
	)
}