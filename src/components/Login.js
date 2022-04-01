import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../helpers/UrlUsers'
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import { Google } from "react-bootstrap-icons";
import Home from '../components/Home';
import Formulario from '../components/Formulario';

const Login = () => {

    const form = document.getElementById("correo");
    const [data, setData] = useState([])

    const getUser = () => {
        axios.get(url)
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className='login'>
            <img className='LoginImg' src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648523965/Daily-base/images/Color_Purple_Container_Yes_mrp9lw.png" />
            <h1 className='loginH1'>Iniciar Sesión</h1>
            <button className='loginBtnG'>
                <Google /><span> Continuar con Google</span>
            </button>
            <div className='loginDiv'>
                <label className='loginLabel'>Correo electrónico</label>
                <input className='loginForm' id='correo' placeholder='Ingrese su correo electrónico' />
                <Link to="/Home" className='loginRest'>
                    <button className='loginBtn'>ingresar</button>
                </Link>
                <p className='loginInput'> ¿Se te olvido tu contraseña?</p>
                <p>¿Aún no tienes una cuenta? 
                    <Link to="/Formulario" className='loginReg'> Inscribirse</Link>
                </p>
            </div>
        </div >
    )
}
export default Login