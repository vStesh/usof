import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Tags.module.css';


let TagItem = (props) => {

    let [count, setCount] = useState('11232');
    let [wiki, setWiki] = useState('');
    let url = `https://api.stackexchange.com/2.2/tags/${encodeURIComponent(props.item.name)}/info?order=desc&sort=popular&site=stackoverflow&key=4bo*OgdhgS9algrG4b2fPg((`;
    

    // fetch(url)
    //     .then(result => result.json())
    //     .then(
    //         (result) => {
    //             console.log(result);
    //             setCount(result.items[0].count);
    //     });

    return (
        <div className={style.item} key={props.key} >
            <div className={style.title}><span>{props.item.name}</span></div>
            <div className={style.wiki}>sdjfkds jfkasj flkjs flasjd flk ajsd lfk jasdlkfj laksdjf lfj asd
             asdkfj alsdfj adsjf asdjf asdf asdkfj kajsd fj laksjdf sdf
             a sdlkfj alksdfj asdjf lkajsdf ajdslfk jdslfjd </div>
            <div className={style.count}>{count} questions</div>
        </div>
    );
}

export default TagItem;