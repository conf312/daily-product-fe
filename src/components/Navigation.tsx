import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Navigation = () => {
	const BoxNavigation = styled.div`

	`;

	const Navigation = styled.nav`
		display: none;
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		background: #fff;
		a {
			display: block;
			padding: 15px;
			font-size: 20px;
			font-weight: bold;
		}
	`;

	const ButtonMenu = styled.button`
		display: block;
		width: 40px;
		height: 40px;
		border: 1px solid red;
	`;

	return (
		<BoxNavigation>
			<ButtonMenu><span className="for-a11y">메뉴 열기</span></ButtonMenu>
			<Navigation>
				<NavLink to="">자주 묻는 질문</NavLink>
				<NavLink to="">찜 목록</NavLink>
				<NavLink to="">정보제공처</NavLink>
			</Navigation>
		</BoxNavigation>
	)
}