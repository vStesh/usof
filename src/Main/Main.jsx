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
import Question from './Question/Question';
import Tags from './Tags/Tags';
import Users from './Users/Users';
import User from './Users/User';
import * as axios from "axios";

let Main = () => {

    // const [sort, setSort] = useState({type:'activity', order: 'desc'});
    // const [data, setData] = useState([]);
    // let getSorting = (e) => {
    //     let arr = e.target.id.split('-');
    //     setSort({type: arr[0], order: arr[1]});
    // }

    return (
        <div className="content">
            <div className="main-container">
            <Route path='/' exact render={ () => <Home /> }/>
            <Route path='/questions' exact render={ () => <Questions /> }/>
            <Route path='/questions/:id' render={ () => <Question /> }/>
            <Route path='/tags' render={ () => <Tags />}/>
            <Route path='/users' exact render={ () => <Users /> }/>
            <Route path='/users/:id' render={ () => <User /> }/>
            </div>
            
        </div>
    );
}

export default Main;