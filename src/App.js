import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import './components/Stars.css';

import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import { Container } from 'react-bootstrap';


function App() {
  // Scroll to top button reference
  const scrollRef = useRef(null);

  window.addEventListener("scroll", function () {
      // If scrolled 100px from top, see scroll button
      if(window.pageYOffset > 100) {
          scrollRef.current.classList.add("active");
      } else {
          scrollRef.current.classList.remove("active");
      }
  });

  function smoothScroll() {
      // may not work in all browsers
      window.scrollTo( {
          top: 0,
          left: 0,
          behavior: "smooth"
      });
      // $("html, body").animate({ scrollTop: 0 }, "slow");
  };
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
          
      <body className='body site-main'>
        <button className="scroll-to-top" id="scroll-to-top" ref={scrollRef} onClick={smoothScroll}>
          <i className='bx bx-up-arrow-alt' ></i>
        </button>
        <Router>
          <NavBar />
          
          <Banner />
          <About />
          <Services />
          <Portfolio />

            {/* <Route path="/" exact component={Banner} onEnter={function(){
              document.getElementById("banner").scrollIntoView();
            }} />
            <Route path="/" exact component={About} onEnter={function(){
              document.getElementById("about-me").scrollIntoView();
            }} />
            <Route path="/services" exact component={Services} onEnter={function(){
              document.getElementById("services").scrollIntoView();
            }} />
            <Route path="/" exact component={Portfolio} onEnter={function(){
              document.getElementById("portfolio").scrollIntoView();
            }} /> */}

          {/* <div className="app-container">
            <Route path="/" exact component={Container} />
            <Route path="/about" exact component={Container} />
            <Route path="/services" exact component={Container} />
            <Route path="/portfolio" exact component={Container}  />
          </div> */}
            
          {/* <Switch>
            <Route path="/" exact component={Banner} />
            <Route path="" exact component={About} />
            <Route path="/services" exact component={Services} />
            <Route path="/portfolio" exact component={Portfolio}  />
          </Switch> */}
        </Router>
      </body>  
      </div>
  );
}

export default App;
