import React, { Component } from 'react'
import TennisLogo from './tennisracket.png'

export default class Header extends Component {
    render() {
        console.log(TennisLogo)
        return (
            <div>
                <h3>Hi and welcome to tennis scoring</h3>
                <p>Add two player's name to start</p>
                <img src={TennisLogo} width="80" height="80" alt="Logo" />
            </div>
        )
    }
}