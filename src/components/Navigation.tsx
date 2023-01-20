import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Navigation = () => {
<<<<<<< Updated upstream
	const BoxNavigation = styled.div``;
=======
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
			top: 10px;
			left: 80px;
			display: ${gnbOpen?"block":"none"};
			width: 106px;
			height: 50px;
			background: url(${logo}) no-repeat center / 80px auto;
			z-index: 1;
			a {
				display: block;
				width: 100%;
				height: 100%;
				padding: 16px; 
			}
		}
	`;
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
			<ButtonMenu>
=======
			<h1 className="logo"><NavLink to="/" onClick={gnbControlEvent}><span className="for-a11y">장보러가자 로고</span></NavLink></h1>
			<ButtonMenu onClick={gnbControlEvent}>
>>>>>>> Stashed changes
				<span className="for-a11y">메뉴 열기</span>
				<div className="box__icon">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</ButtonMenu>
			<Navigation>
				<NavLink to="/faq" onClick={gnbControlEvent}>자주 묻는 질문</NavLink>
				<NavLink to="/like" onClick={gnbControlEvent}>찜 목록</NavLink>
				<NavLink to="/terms" onClick={gnbControlEvent}>정보제공처</NavLink>
			</Navigation>
		</BoxNavigation>
	)
}