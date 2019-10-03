import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {
    render() {
        return(
            <header className="Header">
                <img id="me" src="images/profile.jpg" alt="Picture of Tom Hsu"/>
            </header>
        )
    }
}

export default Header