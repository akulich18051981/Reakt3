import React, { useEffect, useState } from "react";
import GET from "../../Servise/GET";
import Navigation from "./Navigation/Navigation";
import tabs from "../data/tabs.json";
import Basket from "./Baskets/Baskets";
import Burger from "../Main/Burger/Burger";

<<<<<<< HEAD

=======
>>>>>>> 306d49f861313c6ad6f76fffb5b1bd18beee3c74
import st from "./Main.module.scss";



export default function Main() {
    const [allCards, setAllcards] = useState(false)
    const [basketCards, setBasketCards] = useState(false)
    const [count, setCount] = useState(0);
    const [id, setid] = useState(false);
    const str = tabs[count].title;

<<<<<<< HEAD

    
=======
>>>>>>> 306d49f861313c6ad6f76fffb5b1bd18beee3c74
    useEffect(() => {
        getAllProduct()
        getBasketCards()

    }, [])

    async function getAllProduct() {
        const result = await GET.getAllProducts()
        setAllcards(result)
<<<<<<< HEAD
        
    }
    async function getBasketCards() {
        const result = await GET.getBasket()
        setBasketCards(result)
        console.log(result);
=======
    }
    async function getBasketCards() {
        const result = await GET.getBasket()
        console.log(result);
        setBasketCards(result)
>>>>>>> 306d49f861313c6ad6f76fffb5b1bd18beee3c74
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
<<<<<<< HEAD
                <Burger arrData={allCards[count][str]} getId={getId} getBasketCards={getBasketCards}/>
=======
                <Burger arrData={allCards[count][str]} getId={getId} />
>>>>>>> 306d49f861313c6ad6f76fffb5b1bd18beee3c74
            </div>
        </>
    );
}