import React, { Component } from 'react'
import { Activity, HouseDoor, Person } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <Link to="/home">
                    <button className='NavBtn'>
                        <HouseDoor className='icon' />
                        <p className='NavP'>Home</p>
                    </button>
                </Link>
                <Link to="/estadisticas">
                    <button className='NavBtn'>
                        <Activity className='icon' />
                        <p className='NavP'>Estadísticas</p>
                    </button>
                </Link>
                <Link to="/perfil">
                    <button className='NavBtn'>
                        <Person className='icon' />
                        <p className='NavP'>Perfil</p>
                    </button>
                </Link>
            </div>
        )
    }
}
