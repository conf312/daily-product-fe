import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { theme } from "../styles/Theme";
import logo from "../assets/image/logo-row.png";

export const Navigation = () => {
	const [gnbOpen, setGnbOpen] = useState(false);
	const BoxNavigation = styled.div`
		position: absolute;
		top: 0;
		right: 0;
		z-index: 5;
		
		&:before {
			content: "";
			display: ${gnbOpen?"block":"none"};
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,0.5);
		}

		.logo {
			position: fixed;
			top: 0;
			left: 80px;
			display: ${gnbOpen?"block":"none"};
			padding: 10px; 
			font-size: 20px;
			color: #fff;
			line-height: 55px;
			z-index: 1;

			&:before {
				content:"";
				display: inline-block;
				width: 80px;
				height: 50px;
				margin-right: 5px;
				background: url(${logo}) no-repeat center / 100% auto;
				vertical-align: top;
			}
		}
	`;

	const ButtonMenu = styled.button`
		position: relative;
		display: block;
		padding: 0 5px;
		z-index: 1;
		.box__icon {
			position: ${gnbOpen?"relative": null};
			width: 30px;
			height: 30px;
			span {
				position: ${gnbOpen?"absolute": null};
				top: ${gnbOpen?"7px": null};
				left: ${gnbOpen?"0": null};
				display: block;
				width: 100%;
				height: 4px;
				margin: 6px 0;
				background: #fff;
				transform: ${gnbOpen?"rotate(45deg)": null};
				transition: all ease 0.3s;
				&:nth-child(2){
					transform: ${gnbOpen?"rotate(-45deg)": null};
				}
				&:last-child {
					display: ${gnbOpen?"none":"block"};
				}
			}
		}
	`;

	const Navigation = styled.nav`
		display: ${gnbOpen?"block":"none"};
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
		<BoxNavigation>
			<p className="logo"><span className="for-a11y">장보러가자 로고</span></p>
			<ButtonMenu onClick={gnbControlEvent}>
				<span className="for-a11y">메뉴 열기</span>
				<div className="box__icon">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</ButtonMenu>
			<Navigation>
				<NavLink to="">자주 묻는 질문</NavLink>
				<NavLink to="">찜 목록</NavLink>
				<NavLink to="">정보제공처</NavLink>
			</Navigation>
		</BoxNavigation>
	)
}