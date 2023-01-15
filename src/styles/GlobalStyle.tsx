import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
	${reset}
`;

export const BoxWrap = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${props=>props.color};
`;

export const BoxInner = styled.div`
	width: 1400px;
	margin: 0 auto;
	@media ${theme.device.desktop_s}{
		width: 94%;
		background: blue;
	}
	@media ${theme.device.tablet}{
		width: 94%;
		background: purple;
	}
	@media ${theme.device.mobile}{
		width: calc(100% - 32px);
		background: red;
	}
`;