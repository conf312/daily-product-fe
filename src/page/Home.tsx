import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { BoxInner } from "../styles/GlobalStyle"
import { theme } from "../styles/Theme";

const dummyProduct = ["사과",	"배",	"배추",	"무",	"양파",	"상추",	"오이",	"호박",	"쇠고기",	"돼지고기",	"닭고기",	"달걀",	"조기",	"명태",	"오징어",	"고등어",	"애호박",	"냉동참조기",	"삼겹살",	"동태",	"갈치",	"참기름",	"쌀"];

export const Home = () => {
	interface itemType {
		category?: string
	}
	const CategoryItem = styled.li<itemType>`
		display: inline-block;
		width: ${props=>props.category!=="product"?"calc(50% - 8px)":"20%"};
		margin-right: ${props=>props.category!=="product"?"16px":""};
		margin-bottom: ${props=>props.category==="product"?"16px":""};
		font-size: 18px;
		font-weight: 700;
		color: #333;
		border-radius: ${props=>props.category!=="product"?"8px":""};
		box-shadow: ${props=>props.category!=="product"?"2px 2px 5px rgba(0,0,0,0.2)":""};
		text-align: center;
		a {
			display: block;
			width: 100%;
			height: 100%;
			padding: ${props=>props.category!=="product"?"20px":""};
		}
		.box__icon{
			width: ${props=>props.category==="product"?"90px":""};
			height: ${props=>props.category==="product"?"90px":""};
			padding: ${props=>props.category==="product"?"25px":""};
			margin: 0 auto 10px;
			border-radius: ${props=>props.category==="product"?"50%":""};
			box-shadow: ${props=>props.category==="product"?"2px 2px 5px rgba(0,0,0,0.2)":""};
			img{
				width: 40px;
				height: 40px;
			}
		}
		@media ${theme.device.mobile} {
			width: ${props=>props.category!=="product"?"calc(50% - 4px)":"25%"};
			margin-right: ${props=>props.category!=="product"?"8px":""};	
			font-size: 16px;
			border: ${props=>props.category!=="product"?"1px solid #f5f5f5":""};
			.box__icon{
				width: ${props=>props.category==="product"?"60px":""};
				height: ${props=>props.category==="product"?"60px":""};
				padding: ${props=>props.category==="product"?"15px":""};
				margin-bottom: 5px;
				img{
					width: ${props=>props.category==="product"?"30px":""};
					height: ${props=>props.category==="product"?"30px":""};
				}
			}
		}
	`;

	const BoxCategory = styled.ul`
		margin-bottom: 20px;
		&:first-child ${CategoryItem}:last-child{
			margin-right: 0;
		}
	`;

	return (
		<BoxInner>
			<BoxCategory>
				<CategoryItem>
					<NavLink to="/list/market-tradition">
						<p className="box__icon"><img src="./assets/icon__store1.png" alt="" /></p>
						<p className="text">시장</p>
					</NavLink>
				</CategoryItem>
				<CategoryItem>
					<NavLink to="/list/market">
						<p className="box__icon"><img src="./assets/icon__store2.png" alt="" /></p>
						<p className="text">마트</p>
					</NavLink>
				</CategoryItem>
			</BoxCategory>		
			<BoxCategory>
				{dummyProduct.map((item, idx)=>{
					return(
						<CategoryItem category="product" key={idx}>
							<NavLink to={"/list/product"+`${idx}`}>
								<p className="box__icon"><img src={"./assets/icon__product"+`${idx+1}`+".png"} alt="" /></p>
								<p className="text">{item}</p>
							</NavLink>
						</CategoryItem>				
					)
				})}
			</BoxCategory>
		</BoxInner>
	)
}