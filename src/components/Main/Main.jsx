import React, { useEffect, useState } from "react";
import GET from "../../Servise/GET";
import Navigation from "./Navigation/Navigation";
import tabs from "../data/tabs.json";
import Basket from "./Baskets/Baskets";
import Burger from "../Main/Burger/Burger";
import st from "./Main.module.scss";



export default function Main() {
    const [allCards, setAllcards] = useState(false)
    const [basketCards, setBasketCards] = useState(false)
    const [count, setCount] = useState(0);
    const [id, setid] = useState(false);
    const str = tabs[count].title;



    

    useEffect(() => {
        getAllProduct()
        getBasketCards()

    }, [])

    async function getAllProduct() {
        const result = await GET.getAllProducts()
        setAllcards(result)

    }
    async function getBasketCards() {
        const result = await GET.getBasket()
       
        setBasketCards(result)

    }

    function editCount(numbers) {
        setCount(numbers);
    }
    function getId(idkards) {
        setid(idkards);
    }


    if (!allCards) return <h1>loading....</h1>
    if (!basketCards) return <h1>loading...</h1>



    return (
        <>
            <Navigation editCount={editCount} />
            <div className={st.Main}>
                <Basket basket={basketCards} setBasketCards={setBasketCards} id={id} />

                <Burger arrData={allCards[count][str]} getId={getId} basket={basketCards} setBasketCards={setBasketCards} />

            </div>
        </>
    );
}