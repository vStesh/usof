import React from 'react';
import style from './Bar.module.css';

let Bar = () => {
    return (
        <div className="bar">
            <ul className={style.menu}>
                <li className={style.item}>Home</li>
                <li className={style.item}>Questions</li>
                <li className={style.item}>Tags</li>
                <li className={style.item}>Users</li>
            </ul>
        </div>
    );
}

export default Bar;