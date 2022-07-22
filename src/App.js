import React from 'react'
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Resume from './components/Resume/resume';

const App = () => {


    return (
        <>
            <Header />
            <Resume />
            <GlobalStyle />
        </>
    )
}

export default App