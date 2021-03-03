import React from 'react';
import './App.css';
import Header from './Header/Header';
import Bar from './Bar/Bar';
import Footer from './Footer/Footer';
import Main from './Main/Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Landing from './Landing';
import Home from './Home';

function App() {
 
  return (
    <Router>
      <div className="wrapper">
        
        <Header />
        
        <div className="main">
        {/* <Landing /> */}
          <Bar />
          <Main />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
