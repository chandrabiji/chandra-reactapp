import React, { Component } from 'react'
import {Link } from 'react-router-dom';
export class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/Login">LogIn</a></li>
                </ul>
            </div>
        )
    }
}

export default Menu
