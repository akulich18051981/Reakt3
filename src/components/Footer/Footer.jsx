import st from './Footer.module.scss'
import logo from './Images/logo2.png'
import call from './Images/Call.png'
import autor from './Images/autordizain.png'
// import Wk from './Images/wk.png'
// import telegram from './Images/telegram.png'
export default function Footer() {
    return (
        <div className={st.Footer}>
            <div className={st.Footerconteyner}>
                <img src={logo} alt="logo" className={st.logo} />
                <div className={st.Contakts}>
                    <div className={st.Numbers}>
                        <span className={st.Number}>Номер для заказа</span>

                    </div>
                    <img src={call} alt="Call" className={st.Call} />
                    <span className={st.Callnumber}>+7(930)833-38-11</span>
                </div>
                <div className={st.socialnetwork}>
                    <span className={st.Number}>Мы в соцсетях</span>
                    <div className={st.social}>
                        <div className={st.Wk}></div>
                        {/* <img src={Wk} alt="Wk" className={st.Wk} /> */}
                        <div className={st.telegram}></div>
                        {/* <img src={telegram} alt="telegram" className={st.telegram} /> */}
                    </div>
                </div>

            </div>
            <img src={autor} alt="autor" className={st.autor} />
        </div>

    );
}