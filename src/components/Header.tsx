import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BoxInner } from "../styles/GlobalStyle";
import { Navigation } from "./Navigation"

export const Header = () => {
	const BoxHeader = styled.header`
		padding: 20px 0;
		border-bottom: 1px solid #e5e5e5;
	`;
	return (
		<BoxHeader>
			<BoxInner>
				<h1 className="logo">
					<NavLink to="/">logo</NavLink>
				</h1>
				<div className="box__bg-mode">
					<button type="button">light</button>
					<button type="button">dark</button>
				</div>
				<Navigation/>
			</BoxInner>
		</BoxHeader>
	)
}