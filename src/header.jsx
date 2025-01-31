import React from 'react'
import { Link } from 'react-router-dom'
import style from './header.module.css'

function Header(){
    return(
        <>
            <header>
                <div className={style.siteName}>Ecom Site</div>
                <div className={style.buttons}>
                    <Link to="/">
                        <button>Home</button>   
                    </Link>
                    <button className={style.dead}>|</button>
                    <Link to="/item">
                        <button>Items</button>
                    </Link> 
                    <button className={style.dead}>|</button>
                    <Link to="/yourCart">
                        <button>Your Cart</button>
                    </Link>
                </div>
            </header>
            <hr/>
        </>
    );
}

export default Header