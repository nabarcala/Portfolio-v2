import React, {useRef} from 'react';

import '../App.css';
import About from '../components/About';
import Banner from '../components/Banner';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';

function Home () {
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
        <main className="site-main">
            <button className="scroll-to-top" id="scroll-to-top" ref={scrollRef} onClick={smoothScroll}>
                <i className='bx bx-up-arrow-alt' ></i>
            </button>
            <Banner />
            <About />
            <Services />
            <Portfolio />
            {/* <shooting-stars image="./star.png" height="'10px'" width="10" min-speed="10" max-speed="50" num="10"></shooting-stars> */}
        </main>
    )
}

export default Home;