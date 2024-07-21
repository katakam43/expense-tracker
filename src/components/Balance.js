import React from 'react'
import { useContext } from 'react'
import { tranasactionContext } from '../App'

const Balance = () => {

    const { globalState } = useContext(tranasactionContext);

    const totalBalance = globalState.data.reduce((acc, obj) => acc + Number(obj.amount), 0);
    const incomeBalance = globalState.data.reduce((acc, obj) => acc + (obj.amount > 0 ? Number(obj.amount) : 0), 0);

    const expenseBalance = globalState.data.reduce((acc, obj) => acc + (obj.amount < 0 ? Number(obj.amount) : 0), 0);


    return (
        <div className='balance-container'>
            <div className='your-balance'>
                <div className='yourbalance-header'>YOUR BLALANCE</div>
                <h1>
                    {totalBalance < 0 ? '-' : ''}${Math.abs(totalBalance)}
                </h1>
            </div>

            <div className='income-expense-container'>
                <div className='income-expense-section'>
                    <div>INCOME</div>
                    <h2 className='income'>${incomeBalance}</h2>
                </div>
                <div className='seperator'></div>
                <div className='income-expense-section'>
                    <div>EXPENSE</div>
                    <h2 className='expense'>${Math.abs(expenseBalance)}</h2>
                </div>
            </div>

        </div>
    )
}

export default Balance
