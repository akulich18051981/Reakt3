import React, { useEffect } from 'react'
import st from '../Pages/Basketall.module.scss'
import GET from '../Servise/GET'
import { useState } from 'react';


export default function Basketall() {

        const [arr, setArr] = useState(false);

        useEffect(()=> {
            getPostBasket()
        },[]);



        async function getPostBasket() {
            const dat = await GET.getBasket();
            setArr(dat)
        }
        getPostBasket()


    if(!arr){
        return <h1>Loading...</h1>
    }
    return (
        <div className={st.basketallwrapper}>
            {/* {arr.map((item)=>( */}
            <h1 className={st.name}>order</h1>
            {/* ))} */}


        </div>
    )
}
