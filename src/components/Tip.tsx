import './tip.css'

const Tip = ({ value }: { value: string }) => {
    return (
        <>
            <button className="tip-button">{value}</button>
        </>
    )
}

export default Tip

