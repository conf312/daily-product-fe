import styled, { createGlobalStyle , css } from "styled-components";
import reset from "styled-reset";
import { theme } from "./Theme";
import CookieFontRegular from "../assets/fonts/CookieRun_Regular.ttf";
import CookieFontBold from "../assets/fonts/CookieRun_Bold.ttf";
import CookieFontBlack from "../assets/fonts/CookieRun_Black.ttf";

export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: "cookie";
		font-weight: 400;
		font-style: normal;
		src: url(${CookieFontRegular});
	}
	@font-face {
		font-family: "cookie";
		font-weight: 700;
		font-style: normal;
		src: url(${CookieFontBold});
	}
	@font-face {
		font-family: "cookie";
		font-weight: 900;
		src: url(${CookieFontBlack});
	}
	
	${reset}
	html, body, div, span, h1, h2, h3, h4, h5, h6, p, * {
		padding: 0;
		font-family: "cookie";
		font-weight: 400;
		box-sizing: border-box;
	}
	a {
		color: ${theme.colors.textDefault};
		text-decoration: none;
	}
	button {
		border: none;
		background: none;
	}
	input[type="text"],
	input[type="number"], 
	input[type="tel"],
	input[type="password"] {
		width: 100%;
		height: 58px;
		padding: 0 12px; 
		font-size: 16px;
		border: 1px solid #e5e5e5;
		border-radius: 8px;
		@media ${theme.device.mobile}{
			font-size: 14px;
		}
	} 
	input[type="text"]::placeholder, 
	input[type="number"]::placeholder, 
	input[type="tel"]::placeholder {
		color:#999;
	}
	.for-a11y {
		position: absolute;
		height: 0;
		font-size: 0;
		text-indent: -9999px;
		overflow: hidden;
	}
	.text__emphasis {
		color: ${theme.colors.pointColor};
	}
	#cBody {
		padding-bottom: 40px;;
	}
`;

export const BoxWrap = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${props=>props.color};
`;

export const InnerStyle = css`
	width: 640px;
	margin: 0 auto;
	@media ${theme.device.mobile}{
		width: calc(100% - 32px);
	}
`;

export const BoxInner = styled.div`
	${InnerStyle};
`;

interface buttonProps {
	bgColor?: string;
	borderColor?: string;
	textColor?: string;
}
export const ButtonItem = styled.button<buttonProps>`
	display: inline-block;
	min-height: 48px;
	padding: 12px;
	font-size: 16px;
	color: ${props=>props.textColor?props.textColor:null};
	background-color: ${props=>props.bgColor?props.bgColor:null};
	border: 1px solid ${props=>props.borderColor?props.borderColor:null};
	border-radius: 8px;

	&:not(:last-child) {
		margin-right: 10px;
	}
`;

export const BoxButtons = styled.div`
	display: flex;
	margin-top: 20px;
	${ButtonItem} {
		flex: 1;
	}
`;

export const BoxTitle = styled.div`
	margin-bottom: 20px;
	font-size: 18px;
	color: #999;
	line-height: 22px;
	text-align: center;
	.logo {
		width: 55px;
		margin:0 auto 10px;
		img {
			width: 100%;
		}
	}
`;

export const BoxForm = styled.form`
	.box__form-input {
		margin-top: 20px;
	}
	.box__input {
		display: flex;
		margin-top: 10px;
		${ButtonItem} {
			margin-left: 10px;
			white-space: nowrap;
		}
	}
`;

