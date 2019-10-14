import React, { Component } from 'react'
import './IconsBar.scss'

class IconsBar extends Component {
    render() {
        return (
            <div className="IconsBar">
                <div className="IconsBar--icons-container">
                    <div className="IconsBar--box">
                        <h2>Experienced</h2>
                        Proven experience in developing user-friendly websites and web applications.
                    </div>
                    <div className="IconsBar--box">
                        <h2>Skills</h2>
                        Well-versed in JavaScript, HTML, SCSS, CSS, Node, jQuery, MySQL and more.
                    </div>
                    <div className="IconsBar--box">
                        <h2>Debugger</h2>
                        A proactive professional who enjoys systematically testing websites for bugs and debugging errors.
                    </div>
                </div>
            </div>
        )
    }
}

export default IconsBar