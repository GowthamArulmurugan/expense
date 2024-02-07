import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Income() {
    const {transaction}=useContext(GlobalContext);
    const amount=transaction.map(transaction=>transaction.amount);

    const income=amount
    .filter(item=>item>0)
    .reduce((acc,item)=>(acc += item),0)
    .toFixed(2);
    const expence=(amount
    .filter(item=>item<0)
    .reduce((acc,item)=>(acc += item),0)*-1)
    .toFixed(2);

    return (
        <>
          <div class="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" class="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">-${expence}</p>
        </div>
      </div>
        </>
    )
}

export default Income