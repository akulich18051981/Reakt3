import tabs from '../../data/tabs.json';
import st from './Navigation.module.scss';

export default function Navigation(props) {

    function handleClick(index) {
        props.editCount(index)
    }

    
    return (
        <div className={st.Navigation}>
            <ul className={st.nav}>
                {tabs.map((element, index) => (
                    <li className={st.sp} key={index}>
                        <div onClick= {() => { handleClick(index) }} className={st.icon}>
                            <img src={require(`./Images/${element.images}.png`)} className={st.icons} alt="icon"></img>
                            <button  className={st.title} >{element.categories}</button>
                        </div>
                    </li>
                ))}</ul>
        </div>
    );
}
