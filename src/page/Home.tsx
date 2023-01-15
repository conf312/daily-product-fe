import styled from "styled-components";
import { BoxInner } from "../styles/GlobalStyle"

const dummyProduct = ["사과",	"배",	"배추",	"무",	"양파",	"상추",	"오이",	"호박",	"쇠고기",	"돼지고기",	"닭고기",	"달걀",	"조기",	"명태",	"오징어",	"고등어",	"애호박",	"냉동참조기",	"삼겹살",	"동태",	"갈치",	"참기름",	"쌀"];

export const Home = () => {
	interface borderType {
		width: string;
		height: string;
		padding: string;
		borderRadius: string;
	}
	const ButtonSearch = styled.button<borderType>`
		display: block;
		margin: 0 auto;
		width: ${props=>props.width};
		height: ${props=>props.height};
		padding: ${props=>props.padding};
		border-radius: ${props =>props.borderRadius};
	`;

	const ListUl = styled.ul`
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		
		.list-item {
			flex: 1;
		}

		&.list__category {
			justify-content: initial;
			.list-item {
				flex: initial;
				width: 20%;
			}
		}
	`;

	
	return (
		<BoxInner>
			<ListUl>
				<li className="list-item">
					<ButtonSearch width="100%" height="auto" padding="20px 0" borderRadius="8px">시장</ButtonSearch>
				</li>
				<li className="list-item">
					<ButtonSearch width="100%" height="auto" padding="20px 0" borderRadius="8px">마트</ButtonSearch>
				</li>
			</ListUl>		
			<ListUl className="list__category">
				{dummyProduct.map((item, idx)=>{
					return(
						<li key={idx} className="list-item">
							<ButtonSearch width="60px" height="60px" padding="0" borderRadius="50%">{item}</ButtonSearch>							
						</li>
					)
				})}
			</ListUl>
		</BoxInner>
	)
}