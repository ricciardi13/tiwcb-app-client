import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends React.Component {
    render(){
        return (
            <header>
                <Link to='/'><svg className="logo"></svg></Link>                
                <h1>Today I Was Chased By...</h1>
                <NavMenu />
            </header>
        )
    }
}