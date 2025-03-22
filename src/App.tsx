import './styles/App.css'
import SelectTip from './components/SelectTip'
import { useState } from 'react'
import BillContext from './utils/BillContext'
import People from './components/People'
import Result from './components/Result'
import BillAmount from './components/BillAmount'

function App() {
  const [amount, setAmount] = useState<string>('')
  const [tip, setTip] = useState<string>('');
  const [people, setPeople] = useState<string>('');

  return (
    <>
      <div className='app-title'>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <div className='app-content'>
        <BillContext.Provider value={{ amount, setAmount, tip, setTip, people, setPeople }}>
          <div className='app-calc-bill'>
            <BillAmount />
            <SelectTip />
            <People />
          </div>
          <div className='app-result-bill'>
            <Result />
          </div>
        </BillContext.Provider>
      </div>
    </>
  )
}

export default App