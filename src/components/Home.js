import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
    return (


        <div className='home'>
            <h3 className='homeH3'>Practica tus conocimientos en la categoría que prefieras.</h3>

            <div className='homeDiv'>

                <div className='homeDivCont'>
                    <Link to="/Questionario">
                        <img className='homeImg' src='https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648626992/Daily-base/images/html_l6aovw.png' />
                        <progress id="file" max="100" value="0"></progress>
                        <p className='homeP'>HTML</p>
                    </Link>
                </div>
            </div>

            <div className='homeDiv'>
                <div className='homeDivCont'>
                    <Link to="/Questionario">
                        <img className='homeImg' src='https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648626992/Daily-base/images/css_bm6o06.png' />
                        <progress id="file" max="100" value="25"></progress>
                        <p className='homeP'>CSS</p>
                    </Link>
                </div>
                <div className='homeDivCont'>
                    <Link to="/Questionario">
                        <img className='homeImg' src='https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648627013/Daily-base/images/js_yndoov.png' />
                        <progress id="file" max="100" value="50"></progress>
                        <p className='homeP'>JS</p>
                    </Link>
                </div>
            </div>
            <div className='homeDiv'>
                <div className='homeDivCont'>
                    <Link to="/Questionario">
                        <img className='homeImg' src='https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648626992/Daily-base/images/figma_p1eomv.jpg' />
                        <progress id="file" max="100" value="75"></progress>
                        <p className='homeP'>FIGMA</p>
                    </Link>
                </div>
                <div className='homeDivCont'>
                    <Link to="/Questionario">
                        <img className='homeImg' src='https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648627640/Daily-base/images/ux_olo21m.png' />
                        <progress id="file" max="100" value="100"></progress>
                        <p className='homeP'>UX</p>
                    </Link>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default Home