import React from 'react'
import { useContext } from 'react'
import { tranasactionContext } from '../App'

const TransactionsList = () => {

    const { globalState, deleteTransaction } = useContext(tranasactionContext)

    return (
        <div className='transactions-list-container'>
            <h3>History</h3>

            <div className='transaction-lists'>
                {globalState.data.map((tranasaction =>
                    <div key={tranasaction.id} className={tranasaction.amount < 0 ? 'transaction negative' : 'transaction positive'} >
                        <div>{tranasaction.name}</div>
                        <div>{tranasaction.amount < 0 ? '-' : ''}${Math.abs(tranasaction.amount)}</div>
                        <button onClick={() => deleteTransaction(tranasaction.id)} className="delete-btn">x</button>
                    </div>))}

            </div>

        </div>
    )
}

export default TransactionsList
