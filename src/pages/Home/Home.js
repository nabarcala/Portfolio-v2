import React from 'react'
import { AboutMe, Navbar, Portfolio, Sections } from '../../components'
import { Scroll } from '../../components/Scroll/Scroll';
// import { lightTheme, darkTheme } from '../../themes/theme';
import { globalData, homeData, aboutData, portfolioData } from './Data';

const Home = () => {
    return (
        // <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
            <>
                <Navbar />

                <Scroll /> 

                <Sections {...homeData } { ...globalData} />
                <AboutMe {...aboutData} { ...globalData} />
                <Portfolio {...portfolioData} { ...globalData} />

                {/* <Services {...servicesData} { ...globalData} /> */}
            </>
        // </ThemeProvider>
    )
}

export default Home;
