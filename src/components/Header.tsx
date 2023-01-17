import styled from "styled-components";
import { BoxInner, InnerStyle } from "../styles/GlobalStyle";
import { theme } from "../styles/Theme";
import { Navigation } from "./Navigation";
import IconSearch from "../assets/image/icon__search.png";
import IconArrow from "../assets/image/icon__arrow.png";
export const Header = () => {
	const BoxHeader = styled.header`
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

	return (
		<BoxHeader>
			<BoxInner>
				<ButtonArea>지역 선택</ButtonArea>
				<Navigation />
			</BoxInner>
			
			<BoxSearch>
				<input type="text" placeholder="상품명, 마트명 입력"/>
				<button type="button" className="button__search"><span className="for-a11y">검색하기</span></button>
			</BoxSearch>
		</BoxHeader>
	)
}