import st from './Burger.module.scss';

import { useEffect, useState } from 'react';
import React from 'react';


export default function Burger(props) {
   
    const [kardBasket, setKardBasket] = useState();
    const [id, setId] = useState(0)
    
    useEffect(() => {
        if (!id) return
        addProduct(id)
    }, [id]);

    useEffect(() => {
        
    }, []);

    
    function addProduct(id) {
        let obj = kardBasket
        
        kardBasket.forEach((element) => {
            if (element.id === props.id) {
          obj = element
          
            }
            
        })
        if (!obj) return
        const newKardBasket = [...kardBasket]
        newKardBasket.push(obj)
        setKardBasket(newKardBasket)
        
    }

    if (!id) {
        return <h1>loading</h1>
    }
    return (
        <div className={st.Maintitle}>
            <span className={st.Maintitleburg} >{props.arrData.title}
            </span>
            <div className={st.Mainmenu}>
                <div className={st.menu}>
                    <ul className={st.Menunav}>
                        {props.arrData.map((element, index) => (
                            <li className={st.mn} key={index}>
                                <div className={st.icon}>

                                    

                                    {console.log(element)}

                                    <img src={require(`./Images/${element.imeges}.jpg`)} className={st.icons} alt="icon"></img>
                                </div>
                                <div className={st.inform}>
                                    <p className={st.informcategoriesc}>{element.price}</p>
                                    <p className={st.informcategories}>{element.categories}</p>
                                    <p className={st.informcategoriesg}>{element.weight}</p>

                                </div>
                                <div className={st.btnadd}>

                                    <button onClick={() => addProduct(element.Id)} className={st.add}>Добавить</button>

                                  

                                </div>
                            </li>
                        ))}</ul>
                </div>
            </div>
        </div>

    );
}