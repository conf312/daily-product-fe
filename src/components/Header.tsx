import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BoxInner } from "../styles/GlobalStyle";
import { Navigation } from "./Navigation";

export const Header = () => {
	const BoxHeader = styled.header`
		padding: 20px 0;
		border-bottom: 1px solid #e5e5e5;

		${BoxInner} {
			display: flex;
			justify-content: space-between;
		}
	`;

	const ButtonArea = styled.button`
		font-size: 20px;
	`;

	const BoxSearch = styled.div`
		padding: 10px 0;

		${BoxInner}{
			justify-content: center;
		}
	`;

	return (
		<BoxHeader>
			<BoxInner>
				<ButtonArea>지역 선택</ButtonArea>
				<Navigation />
			</BoxInner>
			
			<BoxSearch>
				<BoxInner>
					<input type="text" />
					<button type="button" className="button__search"><span className="for-a11y">검색하기</span></button>
				</BoxInner>
			</BoxSearch>
		</BoxHeader>
	)
}