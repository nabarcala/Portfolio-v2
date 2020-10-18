import React from 'react';

import '../App.css';
import About from '../components/About';
import Banner from '../components/Banner';
import '../components/Banner.css';

function Home () {
    return (
        <main className="site-main">
            <button class="scroll-to-top" id="scroll-to-top">
                <i class='bx bx-up-arrow-alt' ></i>
            </button>
            <Banner />
            <About />
            {/* <shooting-stars image="./star.png" height="'10px'" width="10" min-speed="10" max-speed="50" num="10"></shooting-stars> */}
        </main>
    )
}

export default Home;