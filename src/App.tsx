import './styles/App.css'
import SelectTip from './components/SelectTip'
import { useState } from 'react'
import BillContext from './utils/BillContext'
import BillValue from './components/BillValue'
import People from './components/People'
import Result from './components/Result'

function App() {
  const [amount, setAmount] = useState<string | null>(null);
  const [tip, setTip] = useState<string | null>(null);
  const [people, setPeople] = useState<string | null>(null);

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