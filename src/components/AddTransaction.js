import React, { useState } from 'react'
import { useContext } from 'react';
import { tranasactionContext } from '../App';

const AddTransaction = () => {
    const { addTransaction } = useContext(tranasactionContext)

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name !== '' && amount !== '') {
            addTransaction({ id: Math.random() * 10000, name: name, amount: +amount })
        }
        clearData();
    }

    const clearData = () => {
        setAmount(0);
        setName('')
    }

    return (
        <div className='add-transaction-container'>
            <h3>Add New Trasaction</h3>

            <form onSubmit={onSubmit} className='form'>


                <div className='form-inputs-containers'>

                    <label htmlFor="name">
                        Name:
                    </label> <br />
                    <input type='text' className='form-inputs' id="name" name="name" placeholder='Enter Name...' value={name} onChange={(e) => setName(e.target.value)} />
                </div>


                <div className='form-inputs-containers'>

                    <label htmlFor="amount">
                        Amount:<br />
                        (negative - expense, positive - income)
                    </label>
                    <input type='number' className='form-inputs' id="amount" name="amount" value={amount} placeholder='Enter Amount...' onChange={(e) => setAmount(e.target.value)} />
                </div>


                <button type='Submit' className='form-button' value="Save" name="Save">Save </button>

            </form>

        </div>
    )
}

export default AddTransaction
