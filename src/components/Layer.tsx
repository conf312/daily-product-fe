import { ReactNode } from "react";
import styled from "styled-components"
import IconClose from "../assets/image/icon__close.png";

interface layerType {
  open: boolean;
  type?: string;
  headTitle?: string;
  content?: ReactNode;
}
interface layerStyleType {
  type?: string;
}
export const Layer = (props:layerType) => {
  const BoxDimmed = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 20;
  `;
  const BoxLayer = styled.div<layerStyleType>`
    position: absolute;
    top: ${props=>props.type?"50%":"0"};
    left: ${props=>props.type?"50%":"0"};
    width: 100%;
    height: 100%;
    background: #fff;
    transform: ${props=>props.type?"translate(-50% -50%)":null};
  `;
  const BoxHead = styled.div`
    position: relative;
    padding: 16px;
    border-bottom: 1px solid #e5e5e5;
    .text__layer-head {
      font-size: 20px;
      font-weight: 700;
      color: #333;
      text-align: center;
    }
  `;
  const BoxContent = styled.div`
    height: 100%;
    padding: 16px;
    overflow-y: auto;
  `;
  const ButtonClose = styled.button`
    position: absolute;
    top: calc(50% - 15px);
    right: 16px;
    width: 30px;
    height: 30px;
    background: url(${IconClose}) no-repeat center / 100%;
  `;
  return (
    <BoxDimmed>
      <BoxLayer type={props.type}>
        {props.open?(
          <>
            <BoxHead>
              <h3 className="text__layer-head">{props.headTitle}</h3>
              <ButtonClose><span className="for-a11y">{props.open?"닫기":"열기"}</span></ButtonClose>
            </BoxHead>
            <BoxContent>{props.content}</BoxContent>
          </>
        ):null}
      </BoxLayer>
    </BoxDimmed>
  )
}