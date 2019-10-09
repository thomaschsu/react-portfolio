import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="Header__about-box">
                    <h1 className="Header__heading highlight-hover text-shadow">Hi! My name is <span className="Header__name">Tom Hsu</span></h1>
                    <img id="me" src="images/profile.jpg" alt="Picture of Tom Hsu" />
                    <h2 className="Header__subtitle text-shadow">I'm a front-end web developer</h2>
                </div>
            </header>
        )
    }
}

export default Header