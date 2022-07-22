import React from 'react'
import GlobalStyle from './styles/global';

const App = () => {

    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);


    return (
        <>
            <div>App</div>
            <GlobalStyle />
        </>
    )
}

export default App