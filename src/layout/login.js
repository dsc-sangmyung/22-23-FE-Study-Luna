import React, { useState }  from "react";
import Header from "./header";
import Footer from "./footer";
import "./login.css"

const Login = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    return (

        <div className="login">
            <Header />
            <main className="main bodycss" >
                <div aria-label="핸드폰이미지">
                    <img src='https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png'/>
                </div>
                <div aria-label="로그인박스위치조정" >
                    <div aria-label="로그인박스" className="loginbox">
                        <div aria-label="insta로고" >
                            <img src="img/LoginLogo.png" alt="mainimage" className="loginlogo"></img>
                        </div>
                        <div className="">
                            <form className="loginform">
                                <div aria-label="아이디입력" className="separatelogin">
                                    <input 
                                        aria-label="전화번호, 사용자 이름 또는 이메일" 
                                        className="inputid"
                                        maxLength={75} 
                                        placeholder="전화번호, 사용자 이름 또는 이메일"
                                        type= "text"
                                        onChange={inputId}>    
                                    </input>
                                </div>
                                <div aria-label="비밀번호 입력" className="separatelogin">
                                    <input 
                                        aria-label="비밀번호"
                                        className="inputid"
                                        maxLength={75} 
                                        placeholder="비밀번호"
                                        type="password"
                                        onChange={inputPw}>
                                    </input>
                                </div>
                                <div aria-label="로그인버튼" className="loginbuttondiv">
                                    <button type="submit" className="loginbutton">
                                        <div>로그인</div>
                                    </button>
                                </div>
                                <div className="orlinediv">
                                    <div aria-label="-" className="orlineside"></div>
                                    <div aria-label="또는" className="orline">또는</div>
                                    <div aria-label="-" className="orlineside"></div>
                                </div>
                                    
                                <div aria-label="facebook 로그인" className="facebooklogindiv">
                                    <button type="button" className="facebookbutton">
                                        <img src="img/facebook.png" alt="facebooklogo" className="facebookloginlogo"></img>
                                        <span className="facebooklogin">Facebook으로 로그인</span>
                                    </button>
                                </div>
                                <a className="pwreset">비밀번호를 잊으셨나요?</a>
                            </form>
                        </div>
                    </div>
                    <div aria-label="회원가입" className="addbox">
                        <div>
                            <p>계정이 없으신가요?
                                <a>
                                    <span>가입하기</span>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div aria-label="다운로드">
                        <p>앱을 다운로드하세요.</p>
                        <div>
                            <a aria-label="App Store에서 다운로드"></a>
                            <a aria-label="Google Play에서 다운로드"></a>
                        </div>
                    </div>
                </div>    
            </main>
            <Footer />
        </div>
    )
}

export default Login