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
        <p>SPLI</p>
        <p>TTER</p>
      </div>
      <div className='app-content'>
        <BillContext.Provider value={{ amount, setAmount, tip, setTip, people, setPeople }}>
          <BillAmount />
          <SelectTip />
          <People />
          <Result />
        </BillContext.Provider>
      </div>
    </>
  )
}

export default App