
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';
import styled from "styled-components";
import { theme } from "../styles/Theme";
import { Layer } from "../components/Layer";
import iconAlign from "../assets/image/icon__align.png";
import { send } from "../apis/Api";
import { BoxInner } from "../styles/GlobalStyle";

interface objectType {
	placeCode: string;
	placeName: string;
}
interface dataType {
	data: Array<objectType>;
}
export const List = () => {
	const BoxSummary = styled.div`
		display: flex;
		justify-content: space-between;
		.text__total {
			font-size: 16px;
			strong {
				font-weight: bold;
				color: ${theme.colors.pointColor};
			}

			@media ${theme.device.mobile} {
				font-size: 14px;
			}
		}
	`;
	const ButtonAlign = styled.button`
		&:before {
			content: "";
			display: inline-block;
			width: 20px;
			height: 20px;
			margin-right: 5px;
			background: url(${iconAlign}) no-repeat center / cover;
			vertical-align: top;
		}
	`;
	const ListUl = styled.ul`
		margin-top: 16px;
	`;
	const ListItem = styled.li`
		position: relative;
		padding: 20px; 
		border: 1px solid #e5e5e5;
		border-radius: 8px;
		&:not(:first-child) {
			margin-top: 16px;
		}
		@media ${theme.device.mobile} {
			padding: 16px;
		}
		.text__price {
			position: absolute;
			bottom: 16px;
			right: 16px;
			.text__number {
				font-weight: 700;
			}
		}

		.box__etc {
			margin-top: 10px;
			font-size: 14px; 
			color: #999;

			span:not(:last-child):after {
				content: "";
				display: inline-block;
				width: 1px;
				height: 10px;
				margin: 2px 5px;
				background: #e5e5e5;
				vertical-align: top;
			}
			@media ${theme.device.mobile} {
				font-size: 12px;
			}
		}
	`;
	const layerData = ["가격 오름차순", "가격 내림차순"];

	const LayerItem = styled.button`
		display: block;
		width: 100%;
		padding: 16px;
		font-size: 20px;
		font-weight: 700;
		color: #333;
	`;
	const areaItemList = layerData.map((item, idx)=>{
		return(
			<LayerItem key={idx}>{item}</LayerItem>
		)
	});
	const dataArea = <div>{areaItemList}</div>

	const [open, setOpen] = useState(false);
	const openLayerEvent = () => {
		setOpen(true);
		document.querySelector("body")?.classList.add("scroll-lock");
	}

	const closeLayerEvent = () => {
		setOpen(false);
		document.querySelector("body")?.classList.remove("scroll-lock");
	}

	const [cookies, setCookie, removeCookie] = useCookies();
	const [data, setData] = useState<Array<objectType>>([]);
	
	const {type} = useParams();

	const getData = () => {
		if(!data.length){
			const areaCode = cookies.currentCode;
			const placeCode = type==="market-tradition"?"1":"2";
			send("get",`/api/livestock/autonomous/${areaCode}/${placeCode}`, "", {}, function(r){
				if(r.data.length>0) setData(r.data);
			})
		}	
	}

	useEffect(()=>{
		getData();
	},[data, cookies]);


	return (
		<BoxInner>
			<BoxSummary>
				<p className="text__total">총 <strong>{data.length}</strong>개</p>
				<ButtonAlign onClick={openLayerEvent}>정렬</ButtonAlign>
				<Layer open={open} type={"bottomType"} headTitle="정렬" content={dataArea} closeLayerEvent={closeLayerEvent}/>
			</BoxSummary>
			<ListUl>
				{data.map((item, idx) => {
					return(
						<ListItem>
							<p className="text__title">{item.placeName}</p>
							<p className="text__price"><span className="text__number">3,0000</span>원</p>
							<div className="box__etc">
								<span>{cookies.currentArea}</span>
								<span>{type ==="1"?"시장":"마트"}</span>
							</div>
						</ListItem>
					)
				})}
			</ListUl>
		</BoxInner>
	)
}