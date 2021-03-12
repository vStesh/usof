import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Home from './Home/Home';
import Questions from './Questions/Questions';
import Tags from './Tags/Tags';
import Users from './Users/Users';
import * as axios from "axios";

let Main = () => {

    const [sort, setSort] = useState({type:'activity', order: 'desc'});
    const [data, setData] = useState([]);
    let getSorting = (e) => {
        let arr = e.target.id.split('-');
        setSort({type: arr[0], order: arr[1]});
        //setUrl(`https://api.stackexchange.com/2.2/questions?pagesize=50&order=${sort.order}&sort=${sort.type}&site=stackoverflow`);
        axios.get(`https://api.stackexchange.com/2.2/questions?pagesize=50&order=${sort.order}&sort=${sort.type}&site=stackoverflow`)
            .then(response => {
                setData(response.data.items);
                console.log(data);
            });  

    }
    

    return (
        <div className="content">
            <div className="main-container">
            <Route path='/' exact render={ () => <Home sortType={sort.type} sortOrder={sort.order} setSorting={getSorting} data={data} setData={setData}/> }/>
            <Route path='/questions' render={ () => <Questions /> }/>
            <Route path='/tags' render={ () => <Tags />}/>
            <Route path='/users' render={ () => <Users /> }/>
            </div>
            
        </div>
    );
}

export default Main;