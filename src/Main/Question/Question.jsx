import React, { useState,  useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import style from './Questions.module.css';
import QuestionItem from './QuestionItem';

let Question = (props) => {

    const [sort, setSort] = useState({type:'creation', order: 'desc'});
    const [data, setData] = useState([]);
    let getSorting = (e) => {
        let arr = e.target.id.split('-');
        setSort({type: arr[0], order: arr[1]});
    }
    let { id } = useParams();
    console.log(id);

    let url = `https://api.stackexchange.com/2.2/questions/${id}?pagesize=50&order=${sort.order}&sort=${sort.type}&site=stackoverflow&filter=!9_bDDx5Ia&key=4bo*OgdhgS9algrG4b2fPg((`;

    useEffect(() => {
        fetch(url)
        .then(result => result.json())
        .then(
            (result) => {
                // console.log(result);
            setData(result.items[0]);
            
        });
    }, []);
    
    console.log(data);

    return (
        <div class={style.container}>
            <div className={style.header}>
                <h2>{data.title}</h2>
                <div className={style.info}>Asked 5 years, 6 months ago Active today Viewed 76k times</div>
            </div>
            
            <div>{data.title}</div>
            <div>{data.body_markdown}</div>
        </div>
    );
}

export default Question;