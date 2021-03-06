import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {
        setInputName(event.target.value); 
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();  
        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date (inputDate),
        };
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }
    return <form onSubmit={ submitHandler }>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label htmlFor="">Title</label>
                <input type="text"
                    value={ inputName }
                    onChange={ nameChangeHandler } 
                />
            </div>
            <div className='new-cost__control'>
                <label htmlFor="">Amount</label>
                <input
                    value={ inputAmount }
                    type="number" 
                    onChange={ amountChangeHandler } 
                    min='0,01' 
                    step='0,01' 
                 />
            </div>
            <div className='new-cost__control'>
                <label htmlFor="">Date</label>
                <input type="date"
                    value={ inputDate } 
                    onChange={ dateChangeHandler } 
                    min='2022-01-01' 
                    step='2022-12-31' 
                />
            </div>
            <div className='new-cost__actions'>
                <button  type='submit'>Set Expense</button>
                <button onClick={ props.onCancel } type="button">Cancel</button> 
            </div>
        </div>
    </form>
}
export default CostForm;