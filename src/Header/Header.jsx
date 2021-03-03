import React from 'react';
import style from './Header.module.css';
import SearchTitle from './SearchTitle';
import Buttons from './Buttons';

let Header = () => {
    return (
        <header className="header">
            <div className="main-container">
                <div className={style.row}>
                    <div className={style.logo}>StackOwerflow</div>
                    <SearchTitle />
                    <Buttons />
                </div>
            </div>
        </header>
    );
}

export default Header;