import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../helpers/UrlUsers'
import { Google } from "react-bootstrap-icons";
import Home from '../components/Home';
import { BrowserRouter, Router, Route } from 'react-router-dom';

const Login = () => {

    const form = document.getElementById("correo");

    // form.addEventListener(("submit"), e => {
    //     e.preventDefault()
    // })

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
    console.log(data);

    if (form === data.correo) {
        <Home />
    } else {
        <Login />
    }


    return (
        <div className='login'>
            <img className='LoginImg' src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648523965/Daily-base/images/Color_Purple_Container_Yes_mrp9lw.png" />

            <h1 className='loginH1'>Iniciar Sesión</h1>
            <button className='loginBtnG'>
                <Google /><span> Continuar con Google</span>
            </button>
            <div className='loginDiv'>
                <label className='loginLabel'>Correo electrónico</label>
                <input id='correo' className='loginInput' placeholder='Ingrese su correo electrónico' />
                <a className='loginRest'>¿Se te olvido tu contraseña?</a>
                <p>¿Aún no tienes una cuenta?
                    <Link className='loginReg' to=''>Inscribirse</Link>
                </p>
            </div>
        </div >
    )
}

export default Login