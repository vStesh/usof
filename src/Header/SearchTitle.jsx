import React from 'react';
import style from './SearchTitle.module.css';

let SearchTitle = () => {
    return (
        <div className={style.searchform}>
            <form>
                <input className={style.input} type="text" placeholder="Search..."/>
            </form>
        </div>
    );
}

export default SearchTitle;