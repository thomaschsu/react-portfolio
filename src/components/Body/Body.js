import React, { Component } from 'react'
import './Body.scss'

class Body extends Component {
    render() {
        return (
            <div className="Body__container">
            <h2 className="Body__title">About Me</h2>
                <p className="Body__paragraph">Tom is an experienced Front-End Web Developer with a proven background in developing user-friendly websites and web applications. He is familiar with full stack development and is well-versed in various programming languages including JavaScript, HTML, SCSS, CSS, Node, and more.</p>
                <p className="Body__paragraph">Tom graduated from Rutgers University with a major in Information Technology. After graduation, he took a lead role in the production and maintenance of a front-end Magento and WordPress company website. This included implementing a PunchOut catalog, systematically testing the website for bugs, and managing the backend Magento catalog. Tom was also responsible for building and managing graphics for the front-end. He also provided client services in a massive company project that required imaging thousands of laptops and desktops for Elizabeth school districts all within tight time constraints.</p>

                <p className="Body__paragraph">On his free time, he likes to take care of his dog (Cocoa), play video games, watch movies / TV shows / anime, and enjoys exercising. He is knowledgeable in headphones - music has always been a big part of his life. He likes to listen to EDM, Hip-Hop, Rap, Pop, Rock, and occasionally classical. Tom also enjoys reading about car news.</p>
            </div>
        )
    }
}

export default Body