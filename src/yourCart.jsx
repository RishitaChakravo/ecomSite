import React from 'react'
import { Context } from './Context'
import {useContext} from 'react'
import style from './items.module.css'

function YourCart(){
    const {cartItems} = useContext(Context);

    function buyItem(item){
        console.log(`item bought : ${item.name}`);
    } 
    
    return(
        cartItems.length === 0 ? "Your cart is empty" :
        <ul style={{listStyle: 'none'}}>
            {cartItems.map((item, index) => (
                          <li key={index} className={style.addedItem}>
                                name: {item.name} <br/>
                                cost: ${item.cost}
                                <button className={style.buy} onClick={()=> buyItem(item)}>Buy Item</button>
                          </li>
            ))}
        </ul>
    );
}

export default YourCart