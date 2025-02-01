import React from 'react'
import style from './home.module.css'

function Home(){
    return(
        <div className={style.container}>
            <p className={style.title}>ECOM SITE</p>
            <p className={style.subtitle}>--an ecomerce website--</p>
        </div>
    );
}

export default Home
