import React, { useState } from 'react'
import * as C from './stylesForm'

const Form = () => {

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);


    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo");
            return;
        }
    };


    return (
        <>
            <C.Container>
                <C.inputContent>
                    <C.input.label>Descrição</C.input.label>
                    <C.input valule={desc} onChange={(e) => setDesc(e.target.valule)} />
                </C.inputContent>
                <C.inputContent>
                    <C.input.label>Valor</C.input.label>
                    <C.input
                        valule={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </C.inputContent>
                <C.RadioGroup>
                    <C.input
                        type="radio"
                        id="rincome"
                        defaultCheck
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.input.label htmlFor="rincome">Entrada</C.input.label>
                    <C.input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    />
                    <C.input.label htmlFor="rExpenses">Saidas</C.input.label>


                </C.RadioGroup>

            </C.Container>
        </>
    )
}

export default Form