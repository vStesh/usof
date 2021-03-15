import React, { useState, useEffect } from 'react';
import style from './Questions.module.css';
import QuestionItem from './QuestionItem';

let Questions = () => {

    const [sort, setSort] = useState({type:'creation', order: 'desc'});
    const [data, setData] = useState([]);
    let getSorting = (e) => {
        let arr = e.target.id.split('-');
        setSort({type: arr[0], order: arr[1]});
    }

    let url = `https://api.stackexchange.com/2.2/questions?pagesize=50&order=${sort.order}&sort=${sort.type}&site=stackoverflow&key=4bo*OgdhgS9algrG4b2fPg((`;

    useEffect(() => {
        fetch(url)
        .then(result => result.json())
        .then(
            (result) => {
                console.log(result);
            setData(result.items);
            
        });
    }, [sort.type + '-' + sort.order]);
    
    let items = [];
    if(data) {
        items = data.map(item => 
            <QuestionItem item={item} key={item.question_id}/>
        ); 
    }

    return (
        <div>
            <h2> All Questions</h2>


            <div className={style.items}>
                {items}
            </div>
        </div>
    );
}

export default Questions;