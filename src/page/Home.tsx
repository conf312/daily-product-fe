
import { useState } from "react";
import { useCookies } from 'react-cookie';
import styled from "styled-components";
import { send } from "../apis/Api";
import { List } from "../components/List";
import { BoxInner } from "../styles/GlobalStyle"
import { theme } from "../styles/Theme";

const dummyProduct = ["사과",	"배",	"배추",	"무",	"양파",	"상추",	"오이",	"호박",	"쇠고기",	"돼지고기",	"닭고기",	"달걀",	"조기",	"명태",	"오징어",	"고등어",	"애호박",	"냉동참조기",	"삼겹살",	"동태",	"갈치",	"참기름",	"쌀"];

export const Home = () => {
	const [cookies, setCookie, removeCookie] = useCookies();
	const [search, setSearch] = useState(false);
	const [data, setData] = useState([]);
	const [dataType, setDataType] = useState<string>();
	
	interface buttonType {
		category?: string
	}
	const ButtonCategory = styled.button<buttonType>`
		display: inline-block;
		width: ${props=>props.category!=="product"?"calc(50% - 8px)":"20%"};
		padding: ${props=>props.category!=="product"?"20px":""};
		margin-right: ${props=>props.category!=="product"?"16px":""};
		margin-bottom: ${props=>props.category==="product"?"16px":""};
		font-size: 18px;
		font-weight: 700;
		color: #333;
		border-radius: ${props=>props.category!=="product"?"8px":""};
		box-shadow: ${props=>props.category!=="product"?"2px 2px 5px rgba(0,0,0,0.2)":""};
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

	const BoxCategory = styled.div`
		margin-bottom: 20px;
		&:first-child ${ButtonCategory}:last-child{
			margin-right: 0;
		}
	`;

	const getData = (event:React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const areaCode = cookies.currentCode;
		const placeCode = event.currentTarget.attributes.getNamedItem("data-index")?.value;
		setDataType(placeCode);
		send("get",`/api/livestock/autonomous/${areaCode}/${placeCode}`, "", {}, function(r){
			setSearch(true);
			setData(r.data);
		})	
	}

	return (
		<BoxInner>
			{!search?
				<>
					<BoxCategory>
						<ButtonCategory onClick={getData} data-index={1}>
							<p className="box__icon"><img src="./assets/icon__store1.png" alt="" /></p>
							<p className="text">시장</p>
						</ButtonCategory>
						<ButtonCategory onClick={getData} data-index={2}>
							<p className="box__icon"><img src="./assets/icon__store2.png" alt="" /></p>
							<p className="text">마트</p>
						</ButtonCategory>
					</BoxCategory>		
					<BoxCategory>
						{dummyProduct.map((item, idx)=>{
							return(
								<ButtonCategory category="product" key={idx}>
									<p className="box__icon"><img src={"./assets/icon__product"+`${idx+1}`+".png"} alt="" /></p>
									<p className="text">{item}</p>
								</ButtonCategory>							
							)
						})}
					</BoxCategory>
				</>
			:
				<List type={dataType} data={data}/>
			}
			
		</BoxInner>
	)
}