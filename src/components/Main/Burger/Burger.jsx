import st from './Burger.module.scss';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import React from 'react';


export default function Burger(props) {
   
    const [kardBasket, setKardBasket] = useState(props.arrData);
    const [id, setId] = useState(0)
    
    useEffect(() => {
        if (!id) return
        addProduct(id)
    }, [id]);

    console.log(kardBasket);
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
=======
import {useEffect, useState } from 'react';


export default function Burger(props) {
    const [kardBasket, setKardBasket] = useState([]);
    const[id,setId]=useState(0)
    useEffect(()=>{
        if(!id) return 
        addProduct(id)
    },[id]);
    
    function addProduct(id) {
        let obj = []
        kardBasket.forEach((element)=>{
        if(element.id === id) {
         obj = element
        }
        })
        if(!obj)return
        const newKardBasket =[...kardBasket]
        newKardBasket.push(obj)
        setKardBasket(newKardBasket)
        console.log(newKardBasket);
     }
  
    
       
    
>>>>>>> 306d49f861313c6ad6f76fffb5b1bd18beee3c74
    
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
<<<<<<< HEAD
                                    
=======
                                    {console.log(element)}
>>>>>>> 306d49f861313c6ad6f76fffb5b1bd18beee3c74
                                    <img src={require(`./Images/${element.imeges}.jpg`)} className={st.icons} alt="icon"></img>
                                </div>
                                <div className={st.inform}>
                                    <p className={st.informcategoriesc}>{element.price}</p>
                                    <p className={st.informcategories}>{element.categories}</p>
                                    <p className={st.informcategoriesg}>{element.weight}</p>

                                </div>
                                <div className={st.btnadd}>
<<<<<<< HEAD
                                    <button onClick={() => addProduct(element.Id)} className={st.add}>Добавить</button>
=======
                                    <button onClick={() => addProduct(element.id)} className={st.add}>Добавить</button>
>>>>>>> 306d49f861313c6ad6f76fffb5b1bd18beee3c74
                                </div>
                            </li>
                        ))}</ul>
                </div>
            </div>
        </div>

    );
}