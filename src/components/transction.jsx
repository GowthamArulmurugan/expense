import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
function Transaction() {
  const { transaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
       

      <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map(transaction=>(<li className={transaction.amount<0?'minus':'plus'} key={transaction.id}>
          {transaction.text} <span>${transaction.amount}</span><button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>))}
          
      </ul>
    </>
  );
}

export default Transaction;

