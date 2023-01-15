import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
	${reset}
	a {
		color: ${theme.colors.textDefault};
		text-decoration: none;
	}
	.for-a11y {
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

export const BoxInner = styled.div`
	width: 900px;
	margin: 0 auto;
	@media ${theme.device.tablet}{
		width: 94%;
		background: purple;
	}
	@media ${theme.device.mobile}{
		width: calc(100% - 32px);
		background: red;
	}
`;