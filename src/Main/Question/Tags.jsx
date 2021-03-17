import React from 'react';
import style from './Questions.module.css';

let Tags = (props) => {

    let getTags = (item, key) => {
        if(props.tags) {
           return props.tags.map(tag => <a href="#"><div className={style.tag} key={key}>{tag}</div></a>); 
        }   
    }

    return (
        <div className={style.tags}>
            { getTags() }
        </div>
    );
}

export default Tags;