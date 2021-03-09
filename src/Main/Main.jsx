import React from 'react';
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

let Main = () => {
    return (
        <div className="content">
            <div className="main-container">
            <Route path='/' exact render={ () => <Home /> }/>
            <Route path='/questions' render={ () => <Questions /> }/>
            <Route path='/tags' render={ () => <Tags />}/>
            <Route path='/users' render={ () => <Users /> }/>
            </div>
            
        </div>
    );
}

export default Main;