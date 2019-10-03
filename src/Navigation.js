import React, { Component } from 'react'
import './Navigation.scss'

class Navigation extends Component {
    render() {
        return(
            <div className="Navigation">
                <input type="checkbox" className="Navigation__checkbox" id="navi-toggle" />
                    <label for="navi-toggle" className="Navigation__button">
                        <span className="Navigation__icon">&nbsp;</span>
                    </label>
                    <div className="Navigation__background">&nbsp;</div>

                    <nav className="Navigation__nav">
                        <ul className="Navigation__list">
                            <li className="Navigation__item"><a href="#" className="Navigation__link"><span>01</span>Home</a></li>
                            <li className="Navigation__item"><a href="#" className="Navigation__link"><span>02</span>Contact</a></li>
                            <li className="Navigation__item"><a href="#" className="Navigation__link"><span>03</span>Portfolio</a></li>
                            <li className="Navigation__item"><a href="#" className="Navigation__link"><span>04</span>Resume</a></li>
                        </ul>
                    </nav>
            </div>
        )
    }
}

export default Navigation