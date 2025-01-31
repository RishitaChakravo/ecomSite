import React from 'react'
import Items from './items';
import style from './item.module.css'

function Item(){
    return(
        <div className={style.body}>
            <div className={style.items}>
                <Items n="chips" c={2} r={5}/>
                <Items n="kitkat" c={2} r={5} />
                <Items n="cola" c={5} r={4} />
                <Items n="Oreo" c={3} r={4.5} />
                <Items n="chips" c={2} r={5} />
                <Items n="icecream" c={3} r={4} />
                <Items n="Namkeen" c={5} r={2}/>
                <Items n="fruit juice" c={5} r={4.5}/>
                <Items n="eggs" c={6} r={4}/>
                <Items n="apple" c={2} r={3}/>
            </div>
        </div>
    );
}

export default Item