import React from 'react';
import style from './Header.module.css';
import SearchTitle from './SearchTitle';
import Buttons from './Buttons';

let Header = (props) => {

    const clientId = 19740;
    const key = '4bo*OgdhgS9algrG4b2fPg((';
    const myUrl = 'https://vstesh.github.io/usof/';

    // const auth = (data) => {

    //     window.SecurityPolicyViolationEvent.autthenticate({
    //         success: (data) => { 
    //             tokens = data; 
    //             console.log(tokens);
    //             setToken(tokens.accessToken);
    //             props.getUsersToken(tokens.accessToken);
    //             setLoggedIn(true);
    //         },
    //         error: (data) => {  
    //             alert('Я не получил доступ :('); 
    //         },
    //     });
    // }

    const init = () => {
        window.SE.init({
            clientId: 19740,
            key: '4bo*OgdhgS9algrG4b2fPg((',
            channelUrl: 'http://vstesh.github.io/usof/', 
            complete: (data) => { console.log(data) } 
        });
        window.SE.authenticate({
            success: function(data) { alert('Я получил доступ!'); }, // Приложение авторизовало пользователя
            error: function(data) {  alert('Я не получил доступ :('); }, // Приложение не авторизовало пользователя
        });
    }

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