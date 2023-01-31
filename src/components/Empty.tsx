import styled from "styled-components";
import { theme } from "../styles/Theme";

interface propsType{
	title?:string;
	text?:string;
}

const BoxEmpty = styled.div`
	padding: 100px 0;
	font-size: 14px;
	color: ${theme.colors.textDefault};
	text-align: center;
	.text__title {
		margin-bottom: 15px;
		font-size: 20px;
		font-weight: 700;
		color: #333;
	}
`;
export const Empty = (props:propsType) =>{
	return(
		<BoxEmpty>
			<p className="text__title">{props.title}</p>
			<p className="text">{props.text}</p>
		</BoxEmpty>
	)
}