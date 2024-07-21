import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';
import { createContext, useReducer } from 'react';
import { globalReducer } from './global-state/globalreducer';

export const tranasactionContext = createContext(null);


function App() {

  const defaultState = {
    data: [
      { id: 1, name: "Book", amount: -10 },
      { id: 2, name: "Coffee", amount: -3 },
      { id: 3, name: "Salary", amount: 500 }
    ]
  };
  const [globalState, dispatch] = useReducer(globalReducer, defaultState);

  const addTransaction = (transactionData) => {
    dispatch({
      type: "ADD_TRANSACTION",
      value: transactionData
    })
  }

  const deleteTransaction = (transactionData) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      value: transactionData
    })
  }

  const getTransactions = () => {
    return globalState;
  }

  return (
    <tranasactionContext.Provider value={{ globalState, addTransaction, deleteTransaction, getTransactions }}>
      <div className='app-container'>
        <Header />
        <Balance />
        <TransactionsList />
        <AddTransaction />

      </div>
    </tranasactionContext.Provider>
  );
}

export default App;
