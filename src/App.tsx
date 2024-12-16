import './styles/App.css'
import SelectTip from './components/SelectTip'
import { useState } from 'react'
import BillContext from './utils/BillContext'
import BillValue from './components/BillAmount'
import People from './components/People'
import Result from './components/Result'

function App() {
  const [amount, setAmount] = useState<string>('')
  const [tip, setTip] = useState<string>('');
  const [people, setPeople] = useState<string>('');

  return (
    <>
      <BillContext.Provider value={{ amount, setAmount, tip, setTip, people, setPeople }}>
        <BillValue />
        <SelectTip />
        <People />
        <Result />
      </BillContext.Provider>
    </>
  )
}

export default App