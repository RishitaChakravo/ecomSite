import React from 'react'
import style from './home.module.css'
import Footer from "./footer.jsx"

function Home(){
    return(
        <>
            <div className={style.container}>
                <p className={style.title}>ECOM SITE</p>
                <p className={style.subtitle}>--an ecomerce website--</p>
            </div>
            <div className={style.image}>
                <div className={style.info}>
                    <p className={style.main}>Shop With Us</p>
                    <p className={style.small}>Come shop with us. Get discounts and many more offers. With free delivery</p>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home
