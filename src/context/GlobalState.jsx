import React, {createContext,useReduce, useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState={
    transaction:[
        {id:1,text:'Salary',amount:5000},
        {id:2,text:'Pen',amount:-20},
        {id:3,text:'Food',amount:-150},
        {id:4,text:'Fuel',amount:-1500},
    ],
}

export const GlobalContext=createContext(initialState);
export const GlobalProvider=({children})=>{
    const[state,dispatch] = useReducer(AppReducer,initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id,
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    }


    return(<GlobalContext.Provider value={{transaction:state.transaction,deleteTransaction,addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}