import React, {useState, createContext} from 'react'

const Context = createContext();

function CartProvider({children}){
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item){
        setCartItems([...cartItems, item])
    }

    return(
        <Context.Provider value={{cartItems, addToCart}}>
            {children}
        </Context.Provider>
    );
}

export {Context, CartProvider}