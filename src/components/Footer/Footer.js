import React, { Component } from 'react'
import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                Copyright &copy; Tom Hsu {(new Date().getFullYear())}
            </div>
        )
    }
}

export default Footer