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
import Tags from './Tags';

let Question = (props) => {

    const [sort, setSort] = useState({type:'creation', order: 'desc'});
    const [data, setData] = useState([]);
    let getSorting = (e) => {
        let arr = e.target.id.split('-');
        setSort({type: arr[0], order: arr[1]});
    }
    let { id } = useParams();
    console.log(id);
    let filter = '!)rTkraV*-SpZ93LKuqvq';
    // let filter = '!Fq.Df6MYBZzXtesLV.EN0kD4k-';
    let url = `https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow&filter=${filter}&key=4bo*OgdhgS9algrG4b2fPg((`;

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

    const formatDate = (date) => {
        let asked = new Date(date * 1000);
        let displayDate =  `
            ${asked.getFullYear()}-${asked.getMonth() < 10 ? "0" + asked.getMonth() : asked.getMonth()}-${asked.getDate() < 10 ? "0" + asked.getDate() : asked.getDate()} `;
        return displayDate;
    }

    return (
        <div class={style.container}>
            <div className={style.header}>
                <h2>{data.title}</h2>
                <div className={style.info}>Asked { formatDate(data.creation_date) }</div>
            </div>
            <div className={style.main}>
                <div className={style.asside}>
                    <div className={style.vote}>
                        <svg aria-hidden="true" class="m0 svg-icon iconArrowUpLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 26h32L18 10 2 26z"></path></svg>
                    </div>
                    <div>{data.score}</div>
                    <div className={style.vote}>
                        <svg aria-hidden="true" class="m0 svg-icon iconArrowDownLg" width="36" height="36" viewBox="0 0 36 36"><path d="M2 10h32L18 26 2 10z"></path></svg>
                    </div>
                </div>
                <div className={style.body}>
                    
                        <div dangerouslySetInnerHTML={{__html: data.body}}></div>
                    
                    
                    <div className={style.tags}>
                        <Tags tags={data.tags}/>
                    </div>
                </div>
            </div>
            <div className={style.comments}>
                
            </div>
        </div>
    );
}

export default Question;