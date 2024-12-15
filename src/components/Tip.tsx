import { useContext } from 'react'
import '../styles/tip.css'
import BillContext from '../utils/BillContext'

interface TipProps {
    value: string;
    setCustom: (value: string) => void;
}

const Tip = ({ value, setCustom }: TipProps) => {
    const context = useContext(BillContext);
    const { tip, setTip } = context

    const updateTip = () => {
        setCustom('')
        setTip(value)
    }

    return (
        <>
            <button className={value === tip ? `tip-button-selected` : `tip-button`} onClick={updateTip}>
                {value}
            </button>
        </>
    )
}

export default Tip

