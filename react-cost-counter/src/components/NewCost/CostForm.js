import React, { useState } from 'react';
import './CostForm.css';

const CostForm = () => {

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    return <form>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label htmlFor="">Title</label>
                <input type="text" onChange={ nameChangeHandler } />
            </div>
            <div className='new-cost__control'>
                <label htmlFor="">Amount</label>
                <input type="number" onChange={ amountChangeHandler } min='0,01' step='0,01' />
            </div>
            <div className='new-cost__control'>
                <label htmlFor="">Date</label>
                <input type="date" onChange={ dateChangeHandler } min='2022-01-24' step='2022-12-31' />
            </div>
            <div className='new-cost__actions'>
                <button type='submit'>Set amount</button>
            </div>
        </div>
    </form>

}
export default CostForm;