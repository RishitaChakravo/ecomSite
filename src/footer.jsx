import React from 'react'
import style from './footer.module.css'

function Footer(){
    const date = new Date().getFullYear();
    return(
        <footer>
            <hr/>
            <p>Ecom Site{date}</p>
            <p>All rights reserved &copy; </p>
        </footer>
    );
}

export default Footer