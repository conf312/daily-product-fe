import { BoxButtons, BoxForm, BoxInner, BoxTitle, ButtonItem } from "../styles/GlobalStyle";
import logo from "../assets/image/logo.png";
import { theme } from "../styles/Theme";

export const Login = () => {
  return (
    <>
      <BoxInner>
        <BoxTitle>
          <p className="logo"><img src={logo} alt="" /></p>
          <p className="text__title">반갑습니다.<br/><span className="text__emphasis">장보러 가자</span>에 오신걸<br/>환영합니다.</p>
        </BoxTitle>
        <BoxForm>
          <form action="" className="form__login">
            <div className="box__input">
              <input type="text" placeholder="아이디 입력" />
            </div>
            <div className="box__input">
              <input type="text" placeholder="비밀번호 입력" />
            </div>
          </form>
          <BoxButtons>
            <ButtonItem bgColor={theme.colors.pointColor} textColor={"#fff"}>로그인</ButtonItem>
            <ButtonItem borderColor={theme.colors.pointColor} textColor={theme.colors.pointColor}>회원가입</ButtonItem>
          </BoxButtons>
        </BoxForm>
      </BoxInner>
    </>
  )
}