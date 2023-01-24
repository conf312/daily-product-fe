
import { ReactNode, useEffect } from "react";
import styled from "styled-components"
import IconClose from "../assets/image/icon__close.png";
import { theme } from "../styles/Theme";

interface layerType {
  open: boolean;
  type?: string;
  headTitle?: string;
  content?: ReactNode;
  closeLayerEvent: React.MouseEventHandler<HTMLButtonElement>;
}
interface layerStyleType {
  type?: string;
}

export const Layer = (props:layerType) => {
  const BoxDimmed = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: ${props.open?"block":"none"};
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 20;
  `;
  const BoxLayer = styled.div<layerStyleType>`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    width: ${props=>props.type?"auto":"450px"};
    height: auto;
    max-height: calc(100vh - 200px);
    background: #fff;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    flex-direction: column;
    @media ${theme.device.mobile} {
      top: ${props=>props.type?"50%":"0"};
      left: ${props=>props.type?"50%":"0"};
      width: ${props=>props.type?"auto":"100%"};
      height: ${props=>props.type?"auto":"100%"};
      max-height: 100%;
      border-radius: ${props=>props.type?"20px":"0"};
      transform: ${props=>props.type?"translate(-50%, -50%)":"translate(0, 0)"};
    }
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
              <ButtonClose onClick={props.closeLayerEvent}><span className="for-a11y">{props.open?"닫기":"열기"}</span></ButtonClose>
            </BoxHead>
            <BoxContent>{props.content}</BoxContent>
          </>
        ):null}
      </BoxLayer>
    </BoxDimmed>
  )
}