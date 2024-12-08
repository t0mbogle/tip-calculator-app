import { useContext } from 'react'
import '../styles/tip.css'
import BillContext from '../utils/BillContext'

const Tip = ({ value }: { value: string }) => {
    const context = useContext(BillContext);
    const { tip, setTip } = context

    return (
        <>
            <button className={value === tip ? `tip-button-selected` : `tip-button`} onClick={() => setTip(value)}>
                {value}
            </button>
        </>
    )
}

export default Tip

