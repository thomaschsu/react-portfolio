import React, { Component } from 'react'
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <video class="hero-video" autoPlay muted loop>
                    <source src="videos/hero.mp4" type="video/mp4"></source>
                    <source src="videos/video.webm" type="video/webm"></source>
                    Your browser is not supported. Please use a newer browser!
                </video>
                <div className="Header__about-box">
                    <h1 className="Header__heading highlight-hover text-shadow">Hi! My name is <span className="Header__name">Tom Hsu</span></h1>
                    <img id="me" src="images/profile.jpg" alt="Tom Hsu" />
                    <h2 className="Header__subtitle text-shadow">I'm a front-end web developer</h2>
                </div>
            </header>
        )
    }
}

export default Header