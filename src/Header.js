import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {
    render() {
        return(
            <header className="Header">
                <h1 className="Header-heading">Hi! My name is Tom Hsu.</h1>
                <img id="me" src="images/profile.jpg" alt="Picture of Tom Hsu"/>
            </header>
        )
    }
}

export default Header