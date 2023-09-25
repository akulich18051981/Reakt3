import React from 'react'
import st from './Header.module.scss'
import logoImg from './Images/logo1.png';
import pic from './Images/pic.png';
import basketimg from '../Main/Navigation/Images/basket.png'
import { NavLink } from 'react-router-dom'
import openBasketall from '../../Pages/Basketall';

export default function Header({ openFormAuth, openFormRegistr,openMain }) {
    return (
        <div className={st.Header}>
            <div className={st.registrationform}>
                {/* <NavLink to='./'><button onClick={openFormAuth} className={st.enter}>Главная</button></NavLink> */}
                <NavLink to='./'><button onClick={openMain} className={st.enter}>Главная</button></NavLink>
                <NavLink to='./autorisation'><button onClick={openFormAuth} className={st.enter}>Войти</button></NavLink>
                <NavLink to='./registration'><button onClick={openFormRegistr} className={st.registration}>Регистрация</button></NavLink>
                <NavLink to='./basketall'><button className={st.btnbasket}  onClick={openBasketall}><img className={st.basketimg} src={basketimg} alt="basket"/></button></NavLink>
                {/* <button onClick={openFormAuth} className={st.enter}>Войти</button>
                <button onClick={openFormRegistr} className={st.registration}>Регистрация</button> */}
            </div>
            <img src={logoImg} alt="logo" className={st.img} />
            <div className={st.block}>
                <img src={pic} alt="pic" className={st.pic} />
                <div className={st.title}>
                    <p className={st.titlewhite}>Только самые</p>
                    <p className={st.titleorange}>сочные бургеры!</p>
                    <p className={st.cena}>Бесплатная доставка от 599₽</p>
                </div>
            </div>
        </div>
    );
}


