import { useContext } from 'react'
import '../styles/tip.css'
import BillContext from './Context/BillContext'

const Tip = ({ value }: { value: string }) => {
    const context = useContext(BillContext);
    const { setTip } = context

    return (
        <>
            <button className="tip-button" onClick={() => setTip(value)}>
                {value}
            </button>
        </>
    )
}

export default Tip

