import { BoxButtons, BoxForm, BoxInner, BoxTitle, ButtonItem } from "../styles/GlobalStyle";
import logo from "../assets/image/logo.png";
import { theme } from "../styles/Theme";

export const Join = () => {
  return (
    <>
      <BoxInner>
        <BoxTitle>
          <p className="logo"><img src={logo} alt="" /></p>
          <p className="text__title">반갑습니다.<br/><span className="text__emphasis">장보러 가자</span>에 오신걸<br/>환영합니다.</p>
        </BoxTitle>
        <BoxForm>
          <form action="" className="form__login">
            <div className="box__form-input">
              <p className="title__form">이름<span>(닉네임)</span></p>
              <div className="box__input">
                <input type="text" placeholder="이름 또는 닉네임 입력" />
              </div>
            </div>
            <div className="box__form-input">
              <p className="title__form">이메일</p>
              <div className="box__input">
                <input type="text" placeholder="이메일 주소 입력" />
              </div>
            </div>
            <div className="box__form-input">
              <p className="title__form">비밀번호</p>
              <div className="box__input">
                <input type="password" placeholder="비밀번호 입력" />
              </div>
            </div>
            <div className="box__form-input">
              <p className="title__form">주소</p>
              <div className="box__input">
                <input type="text" placeholder="우편번호" />
                <ButtonItem borderColor={theme.colors.pointColor} textColor={theme.colors.pointColor}>우편번호 검색</ButtonItem>
              </div>
            </div>
          </form>
          <BoxButtons>
            <ButtonItem bgColor={theme.colors.pointColor} textColor={"#fff"}>회원가입</ButtonItem>
            <ButtonItem borderColor={"#e5e5e5"} textColor={theme.colors.pointColor}>취소하기</ButtonItem>
          </BoxButtons>
        </BoxForm>
      </BoxInner>
    </>
  )
}
