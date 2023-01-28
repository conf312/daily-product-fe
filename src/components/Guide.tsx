import styled from "styled-components"
import iconArrow from "../assets/image/icon__guide-arrow.png";
import { theme } from "../styles/Theme";

interface guideItem{
	text: string;
	x: number;
	y: number;
}
interface guideType{
	visible: boolean;
	guideText: guideItem[]
}
interface guideVisible{
	visible: boolean;
}
const BoxGuide = styled.div<guideVisible>`
	position: fixed;
	top: 0;
	left: 0;
	display: ${props=>props.visible?"none":"block"};
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.7);
	z-index: 5;
`;
interface infoType{
	x: number;
	y: number;
}
const ArrowInfo = styled.p<infoType>`
	position: absolute;
	top: ${props=>props.y}px;
	left: calc(50% - 320px + ${props=>props.x}px);
	padding: 30px 0 0 45px;
	font-size: 25px;
	font-weight: 700;
	color: #fff;
	@media ${theme.device.mobile}{
		left: ${props=>props.x}px;
		font-size: 20px;
	}
	&:before{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 39px; 
		height: 42px;
		margin-right: 10px;
		background: url(${iconArrow}) no-repeat center / 100%;
	}
`;
export const Guide = (props:guideType) => {
	return (
		<BoxGuide visible={props.visible}>
			{props.guideText.map((item, idx) => {
				return(
					<ArrowInfo key={idx} x={item.x} y={item.y}>{item.text}</ArrowInfo>
				)
			})}
		</BoxGuide>
	)
}