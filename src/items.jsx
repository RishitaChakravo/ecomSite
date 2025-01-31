import style from './items.module.css'
import React, {useContext} from 'react'
import { Context } from './Context';

function Items(props){
    const {addToCart} = useContext(Context);

    function addItemsToCart(){
        const item = {
            name : props.n,
            cost : props.c 
        }
        addToCart(item);
    }

    return(
        <>
            <div className={style.item}>
                <p>name: {props.n} </p>
                <p>cost: ${props.c}</p>
                <p>rating: {props.r}/5</p>
                <button onClick={addItemsToCart}>Add to Cart</button>
            </div>
        </>
    );
}

export default Items