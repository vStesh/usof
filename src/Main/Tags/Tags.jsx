import React, { useState, useEffect } from 'react';
import style from './Tags.module.css';
import Sorting from './Sorting';
import TagItem from './TagItem';



let Tags = () => {

    const [sort, setSort] = useState({type:'popular', order: 'desc'});
    const [data, setData] = useState([]);
    
    let getSorting = (e) => {
        let arr = e.target.id.split('-');
        setSort({type: arr[0], order: arr[1]});
    }
    
    let url = `https://api.stackexchange.com/2.2/tags?order=${sort.order}&sort=${sort.type}&site=stackoverflow&key=4bo*OgdhgS9algrG4b2fPg((`;
    

    useEffect(() => {
        fetch(url)
        .then(result => result.json())
        .then(
            (result) => {
                console.log(result);
            setData(result.items); 
        });
    }, [sort.type + '-' + sort.order]);

    console.log(data);

    let items = [];
    if(data) {
        items = data.map((item, key) => 
            <TagItem item={item} key={key}/>
        ); 
    }

    return (
        <div>
            <h2>Tags</h2>
            <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
            <div className={style.headerline}>
                <input className={style.input} placeholder="Filter by user" />
                <div className={style.filters}>
                <Sorting getSorting={getSorting} sort={sort.type + '-' + sort.order}/> 
                </div>
            </div>
            <div className={style.items}>
                { items }
            </div>
        </div>
    );
}

export default Tags;