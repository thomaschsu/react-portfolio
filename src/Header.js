import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="Header-about-box">
                    <h1 className="Header-heading highlight-hover text-shadow">Hi! My name is <span className="Header-name">Tom Hsu</span></h1>
                    <img id="me" src="images/profile.jpg" alt="Picture of Tom Hsu" />
                    <h2 className="Header-subtitle text-shadow">I'm a front-end web developer</h2>
                </div>
            </header>
        )
    }
}

export default Header