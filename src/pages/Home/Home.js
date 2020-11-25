import React from 'react'
import { useState } from 'react';
import { AboutMe, Navbar, Portfolio, Sections } from '../../components'
import { Services } from '../../components'
import { lightTheme, darkTheme } from '../../themes/theme';
import { globalData, homeData, aboutData, servicesData, portfolioData } from './Data';

const Home = () => {
    return (
        // <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
            <>
                <Navbar />
                <Sections {...homeData } { ...globalData} />
                
                <AboutMe {...aboutData} { ...globalData} />

                <Portfolio {...portfolioData} { ...globalData} />

                {/* <Services {...servicesData} { ...globalData} /> */}
            </>
        // </ThemeProvider>
    )
}

export default Home;
