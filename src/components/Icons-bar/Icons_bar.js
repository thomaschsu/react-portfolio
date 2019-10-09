import React, { Component } from 'react'
import './Icons_bar.scss'

class Icons_bar extends Component {
    render() {
        return (
            <div className="Icons_bar">
                <div className="Icons_bar--icons-container">
                    <div className="Icons_bar--box">
                        <h2>Experienced</h2>
                        Proven experience in developing user-friendly websites and web applications.
                    </div>
                    <div className="Icons_bar--box">
                        <h2>Skills</h2>
                        Well-versed in JavaScript, HTML, SCSS, CSS, Node, jQuery, MySQL and more.
                    </div>
                    <div className="Icons_bar--box">
                        <h2>Debugger</h2>
                        A proactive professional who enjoys systematically testing websites for bugs and debugging errors.
                    </div>
                </div>
            </div>
        )
    }
}

export default Icons_bar