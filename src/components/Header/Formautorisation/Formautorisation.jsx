import React from 'react'
import st from './Formautorisation.module.scss'
import { useNavigate } from 'react-router-dom'


 function Formautorisation(props) {
  const navigate = useNavigate()
  function closeAutorisation(){
    navigate('/')
  }
  return (
    
    <div className={st.conteynerdiv}>
      
      <div className={st.App}>
      <button onClick={closeAutorisation} className={st.closebtn}>&#10006;</button>
        <h1 className={st.FormTitle}>Авторизация</h1>
        <form>
          <input
            className={st.AppForm}
            type="text"
            placeholder='Логин' />
          <input type='password' className={st.AppForm} placeholder='Пароль' />
          <button className={st.formbtn}>Войти</button>
        </form>
      </div>
    </div>
  )
}
export default Formautorisation;