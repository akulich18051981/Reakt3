import React, { useState } from 'react'
import st from './Formaregistration.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Formaregistration() {

  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
const navigate = useNavigate()

  function getDataUser() {
    const obj = {
      em: email,
      log: login,
      pas: password,
      secondpas: password
    }

    setLogin('')
    setEmail('')
    setPassword('')
    localStorage.setItem('user', JSON.stringify(obj));
  }
  function closeRegistr(){
    navigate('/')
  }

  return (
    <div className={st.conteynerdiv}>

      <div className={st.App}>
        <button onClick={closeRegistr} className={st.closebtn}>&#10006;</button>
        <h1 className='FormTitle'>Регистрация</h1>
        <form>
          <input
            className={st.AppForm}
            type="text"
            value={login} onChange={(event) => setLogin(event.target.value)}
            placeholder='Логин' />
          <input
            className={st.AppForm}
            type="email"
            value={email} onChange={(event) => setEmail(event.target.value)}
            placeholder='Email' />
          <input
            type='password'
            value={password} onChange={(event) => setPassword(event.target.value)}
            className={st.AppForm}
            placeholder='Пароль' />
          <input type='password' className={st.AppForm} placeholder='Пароль еще раз' />
          <button onClick={getDataUser} className={st.formbtn}>Создать аккаунт</button>
        </form>
      </div>
    </div>
  )
}