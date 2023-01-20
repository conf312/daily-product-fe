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
	input[type="tel"] {
		width: 100%;
		height: 58px;
		padding: 0 12px; 
		font-size: 16px;
		border: 1px solid #e5e5e5;
		border-radius: 4px;
		@media ${theme.device.mobile}{
			height: 48px;
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