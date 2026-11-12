import React from 'react'
import './ModeSwitch.css'

const ModeSwitch= (props)=> {

    return (
        <div
            id="switch"
            className={props.mode}
            onClick={()=>props.toggleMode()}
        >
            <div id="contentwrapper">
                <div id="circle"></div>
                <div id="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div id="shtngstarwrapper">
                        <div id="shootingstar"></div>
                    </div>
                </div>
                <div>
                    <div className="cloud">
                        <div className="cloudpart"></div>
                        <div className="cloudpart"></div>
                    </div>
                    <div className="cloud">
                        <div className="cloudpart"></div>
                        <div className="cloudpart"></div>
                    </div>
                    <div className="cloud">
                        <div className="cloudpart"></div>
                        <div className="cloudpart"></div>
                        <div className="cloudpart"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModeSwitch
