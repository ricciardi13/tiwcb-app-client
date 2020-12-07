import React from 'react'
import { Link } from 'react-router-dom';

export default class NavMenu extends React.Component {
    state = {
        navVisible: false,
    }

    handleChange = this.handleChange.bind(this);

    handleChange(){
        if(this.state.navVisible){
            this.setState({navVisible: false, })
        } 
        else {
            this.setState({navVisible: true, })
        }
    }

    closeMenu = this.closeMenu.bind(this);

    closeMenu(){
        this.setState({navVisible: false, })
    }

    render(){
        if (this.state.navVisible === false){
            return (
                <>
                    <button onClick={this.handleChange}>Menu</button>
                    <nav></nav>
                </>
            )
        } 
        
        else {
            return (
                <>
                    <button onClick={this.handleChange}>Menu</button>
                    <nav>                   
                        <ul>
                            <li><Link to='/dashboard' onClick={this.closeMenu} >Dashboard</Link></li>
                            <li><Link to='/add-chase' onClick={this.closeMenu} >Add Chase</Link></li>
                            {/* <li>My Account</li> */}
                            <li><Link to='/logout' onClick={this.closeMenu} >Log Out</Link></li>
                        </ul>                    
                    </nav>
                </>
            )
        }        
    }
}