import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Balance from './components/balance'
import Income from './components/income'
import Transaction from './components/transction'
import NewTrans from './components/newtransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
     <Header/>
     <div classname="container">
     <Balance/>
     <Income/>
     <Transaction/>
     <NewTrans/>
     </div>
    </GlobalProvider>
  )
}

export default App
