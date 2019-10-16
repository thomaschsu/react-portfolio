import React, { Component } from 'react'
import './Navigation.scss'

class Navigation extends Component {
    render() {
        return(
            <div className="Navigation">
                <input type="checkbox" className="Navigation__checkbox" id="navi-toggle" />
                    <label htmlFor="navi-toggle" className="Navigation__button">
                        <span className="Navigation__icon">&nbsp;</span>
                    </label>
                    <div className="Navigation__background">&nbsp;</div>

                    <nav className="Navigation__nav">
                        <ul className="Navigation__list">
                        <li className="Navigation__item"><a href="#" className="Navigation__link">Home</a></li>
                        <li className="Navigation__item"><a href="#" className="Navigation__link">Contact</a></li>
                        <li className="Navigation__item"><a href="#" className="Navigation__link">Portfolio</a></li>
                        <li className="Navigation__item"><a href="#" className="Navigation__link">Resume</a></li>
                        </ul>
                    </nav>
            </div>
        )
    }
}

export default Navigation