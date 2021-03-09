import React from 'react';
import style from './Bar.module.css';
import {NavLink} from "react-router-dom";

let Bar = () => {
    return (
        <nav className="bar">
            <div className={style.item}>
                <NavLink to="/" >Home</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/questions" >Questions</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/tags" >Tags</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users">Users</NavLink>
            </div>
                
                
                
                

        </nav>
    );
}

export default Bar;