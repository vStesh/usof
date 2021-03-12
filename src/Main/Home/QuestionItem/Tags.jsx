import React from 'react';
import style from './../Home.module.css';

let Tags = (props) => {

    let getTags = () => {
        return props.tags.map(tag => <a href="#"><div className={style.tag}>{tag}</div></a>);
    }

    return (
        <div className={style.tags}>
            { getTags() }
        </div>
    );
}

export default Tags;