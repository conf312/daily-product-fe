import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Navigation = () => {
	const BoxNavigation = styled.div``;

	const ButtonMenu = styled.button`
		display: block;
		padding: 0 5px;
		.box__icon {
			width: 30px;
			height: 30px;
			span {
				display: block;
				width: 100%;
				height: 4px;
				margin: 6px 0;
				background: #fff;
			}
		}
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
			font-weight: 700;
		}
	`;


	return (
		<BoxNavigation>
			<ButtonMenu>
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