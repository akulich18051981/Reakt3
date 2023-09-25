
import icon from './Images/icondelivery.png'
import st from './Baskets.module.scss';
import { NavLink } from 'react-router-dom'


function Basket({id,openBasketall,basket,setBasketCards}) {

    
   

    function basketproduct() {
        if
            (basket.length === 0) {
            return 'Корзина не заполнена !'
        }
    }
    

    function minus(id) {
        const arr = basket.map(item => {

            if (item.id === id && item.nam > 0) {
                item.nam -= 1
                return item
            }
            return item
        })
        setBasketCards(arr)
    }

    function plus(id) {
        const arr = basket.map(item => {
            if (item.id === id) {
                item.nam += 1
                return item
            }
            return item
        })
        setBasketCards(arr)
    }

    function totalsumm() {
        let count = 0;
        basket.forEach((item) => {
            count += item.nam * item.sum
        })
        return count
    }

    function productsumm() {
        let count = 0;
        basket.forEach((item) => {
            count += item.nam
        })
        return count
    }
    function deleteProduct(id) {
        const copyDelBasket = [...basket];
        const newCopyDelBasket = copyDelBasket.filter(item => item.id !== id)
        setBasketCards(newCopyDelBasket);
    }
    

    return (
        <div className={st.Mainconteyner}>
            <div className={st.Mainkorzinatitle}>
                <div className={st.Mainkorzinatitlesum}>
                    <span className={st.Maintitle}>Корзина</span>
                    <span className={st.Mainnav}>{productsumm()}</span>
                </div>
                <div className={st.Baskets}>
                    <ul className={st.Basketnav}>
                        {basket.map((element, id) => (
                            <li className={st.bs} key={id} >
                                <div className={st.wrapper}>
                                    <div className={st.icon}>
                                        <img src={require(`./Images/${element.imeges}.jpg`)} className={st.icons} alt="icon"></img>
                                    </div>
                                    <div className={st.inform}>
                                        <p className={st.informcategories}>{element.categories}</p>
                                        <p className={st.informcategoriesg}>{element.weight}</p>
                                        <p className={st.informcategoriesc}>{element.price}</p>
                                    </div>
                                </div>
                                <div className={st.basketcounter}>

                                    <button onClick={() => { minus(element.id) }} className={st.minus}>-</button>
                                    <span className={st.Basketsum} >{element.nam}</span>
                                    <button onClick={() => { plus(element.id) }} className={st.plus}>+</button>

                                </div>
                                <button onClick={() => deleteProduct(element.id)} className={st.deletebtn}></button>
                            </li>
                        ))}</ul>

                    <div className={st.totalsum}>

                       

                        <p className={st.total}>Итого</p>
                        <span className={st.sum}>{totalsumm()}₽</span>
                    </div>
                    <p className={st.basketproduct}>{basketproduct()}</p>
                   
                    <NavLink to='./basketall'><button className={st.order}  onClick={openBasketall}>Оформить заказ</button></NavLink>
                    <div className={st.delivery}>
                        <img src={icon} className={st.icon} alt="icon"></img>
                        <span className={st.shipping}>Бесплатная доставка</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basket;