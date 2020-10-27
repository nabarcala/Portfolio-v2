import React, {useRef} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import './components/Stars.css';

import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Portfolio from './components/Portfolio';
import Services from './components/Services';


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
      <div>
          {/* <!-- BootStrap --> */} 
          {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/> */}

          {/* <!-- Boxicon --> */}
          <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'/>

          {/* <!-- Add fancyBox CSS --> */}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
      </div>
          
      <div className='body site-main'>
        <button className="scroll-to-top" id="scroll-to-top" ref={scrollRef} onClick={smoothScroll}>
          <i className='bx bx-up-arrow-alt' ></i>
        </button>
        <Router>
          <NavBar /> 

          <Banner />
          <About />
          <Services />
          <Portfolio />

        </Router>
      </div>  
    </div>
  );
}

export default App;
