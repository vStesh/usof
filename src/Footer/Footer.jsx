import React from 'react';
import style from './Footer.module.css';

let Footer = () => {
    return (
        <footer className="footer">
            <div className="main-container">
                <div className={style.menu}>StackOwerflow API Exchange</div>
                <div className={style.copy}>© 2021 - Vladimir Steshenko</div>
            </div>
        </footer>
    );
}

export default Footer;