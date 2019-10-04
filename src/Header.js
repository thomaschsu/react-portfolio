import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="Header-about-box">
                    <h1 className="Header-heading">Hi! My name is Tom Hsu.</h1>
                    <img id="me" src="images/profile.jpg" alt="Picture of Tom Hsu" />
                    <h2 className="Header-subtitle">I'm a front-end web developer</h2>
                </div>
            </header>
        )
    }
}

export default Header