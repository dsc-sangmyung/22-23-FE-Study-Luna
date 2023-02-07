import React, { useState }  from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.css"

const Layout = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    return (

        <div className="layout">
            <Header />
            <main className="main">
                <div aria-label="핸드폰이미지"></div>
                <div aria-label="로그인박스" className="loginbox">
                    <div aria-label="로그인" className="login">
                        <div aria-label="insta로고">
                            <div></div>
                        </div>
                        <div className="loginbox1">
                            <form className="form1">
                                <div className="loginbox2">
                                    <div aria-label="아이디입력" className="loginid">
                                        <div className="idbox">
                                            <label className="label">
                                                <span className="idspan">전화번호, 사용자 이름 또는 이메일</span>
                                                <input 
                                                    aria-label="전화번호, 사용자 이름 또는 이메일" 
                                                    className="inputid"
                                                    maxLength={75} 
                                                    type= "text"
                                                    onChange={inputId}>    
                                                </input>
                                            </label>
                                            <div className="idboxcss"></div>
                                        </div>
                                    </div>
                                    <div aria-label="비밀번호 입력" className="loginid">
                                        <div>
                                            <label className="label">
                                                {/* <span>비밀번호</span> */}
                                                <input 
                                                    aria-label="비밀번호" 
                                                    maxLength={75} 
                                                    placeholder="비밀번호"
                                                    type="text"
                                                    onChange={inputPw}>
                                                </input>
                                            </label>
                                        </div>
                                    </div>
                                    <div aria-label="로그인버튼">
                                        <button type="submit">
                                            <div>로그인</div>
                                        </button>
                                    </div>
                                    <div aria-label="또는"></div>
                                    <div aria-label="facebook 로그인">
                                        <button type="button">
                                            <span>Facebook으로 로그인</span>
                                        </button>
                                    </div>
                                </div>
                                <a>비밀번호를 잊으셨나요?</a>
                            </form>
                        </div>
                    </div>
                    <div aria-label="회원가입">
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

export default Layout