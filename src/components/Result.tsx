import { useContext } from 'react'
import BillContext from '../utils/BillContext'

const Result = () => {
  const { amount, tip, people, setAmount, setTip, setPeople } = useContext(BillContext)

  const clearFullBill = () => {
    setAmount('');
    setTip(null);
    setPeople('');
  }

  return (
    <>
      <span>
        <div>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p>{(tip && amount && people) ? (parseInt(amount) * parseInt(tip)) / 100 / parseInt(people) : null}</p>
      </span>

      <span>
        <div>
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p>{(tip && amount && people) ? parseInt(amount) / parseInt(people) : null}</p>
      </span>

      <button onClick={clearFullBill}>RESET</button>
      <p>amount: {amount}, tip: {tip}, people: {people}</p>
    </>
  )
}

export default Result