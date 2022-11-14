import { useState } from 'react'

import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './counter.scss'
const Counter = () => {
    const [count, setCount] = useState(1)
    const counterHandlerInc = () => {
        setCount(prev => prev + 1)
    }
    const counterHandlerDec = () => {
        if (count !== 1) {
            setCount(prev => prev - 1)
        }
    }
    return (
        <main className="counter-content">
            <div className="dec" onClick={counterHandlerDec}>
                <FontAwesomeIcon icon={faMinus} />
            </div>
            <div className="count">{count}</div>
            <div className="inc" onClick={counterHandlerInc}>

                <FontAwesomeIcon icon={faPlus} />
            </div>
        </main>
    )
}

export default Counter