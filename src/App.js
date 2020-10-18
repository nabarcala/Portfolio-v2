import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import './components/Stars.css';


function App() {
  return (
    <div>
      <head>
          {/* <!-- BootStrap --> */} 
          {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/> */}

          {/* <!-- Boxicon --> */}
          <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'/>

          {/* <!-- Add fancyBox CSS --> */}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
      </head>
          
      <body className='body'>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
      </body>  
      </div>
  );
}

export default App;
