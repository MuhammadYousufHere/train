import React from 'react'
import './styles.scss'
import star from './../../assets/gen/star.png'
import stars from './../../assets/gen/stars.png'
import line from './../../assets/gen/line.png'
const General = () => {
    const [toggle, setToggle] = React.useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className="switcher-container">
            <div className="switcher-content">
                <div className="title">
                    <img src={star} alt="star" />
                    <h1>Switch to <span>
                        <b>Nerd version</b>
                        <img src={line} alt="line" />
                    </span> to see <b>more data</b></h1>
                    <img src={stars} alt="stars" />

                </div>
                <div className="toggler">
                    <h3>Boomer</h3>
                    <div className="toggle-switch" onClick={handleToggle}>
                        <input
                            type="checkbox"
                            className="toggle-switch-checkbox"

                        />
                        <label className="toggle-switch-label">
                            <span className="toggle-switch-inner" />
                            <span className="toggle-switch-switch" style={{ right: toggle ? '3%' : '38px' }} />
                        </label>
                    </div>
                    <h3>Nerd</h3>
                </div>
            </div>
        </div>
    )
}

export default General