import React from 'react'
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Resume from './components/Resume/resume';
import Form from './components/Form/form';

const App = () => {


    return (
        <>
            <Header />
            <Resume />
            <Form />
            <GlobalStyle />
        </>
    )
}

export default App