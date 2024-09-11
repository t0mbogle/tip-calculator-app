import './styles/App.css'
import SelectTip from './components/SelectTip'
import { useState } from "react";
import BillContext from './components/Context/BillContext';
import BillValue from './components/BillValue';

function App() {
  const [amount, setAmount] = useState<string | null>(null);
  const [tip, setTip] = useState<string | null>(null);
  const [people, setPeople] = useState<number | null>(null);

  return (
    <>
      <BillContext.Provider value={{ amount, setAmount, tip, setTip, people, setPeople }}>
        <BillValue />
        <SelectTip />
      </BillContext.Provider>
    </>
  )
}

export default App