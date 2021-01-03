import React, { useState } from 'react'
import HeroImg from '../assets/illustration-working.svg'
import Logo from '../assets/logo.svg'

export const Hero = () => {

    const [animstate, setanimstate] = useState({
        menuOpened: false
    })

    const { menuOpened } = animstate;

    const handleMenu = () => {
        setanimstate( {menuOpened: !menuOpened} );
        ( menuOpened )
        ? document.body.style.overflow = "visible"
        : document.body.style.overflow = "hidden";
    }

    return (
        <div className="animate__animated animate__fadeIn hero padding">
            <header className="hero__header">
                <img alt="logo" className="hero__header-logo" src={ Logo } />
                <div className={ `hero__header-nav ${ menuOpened ? '' : 'hidden' }` }>
                    <a href="http://puentes.intech5g.com/" target="_blank" className="link">Features</a>
                    <a href="http://puentes.intech5g.com/" target="_blank" className="link">Pricing</a>
                    <a href="http://puentes.intech5g.com/" target="_blank" className="link">Resources</a>
                    <a href="http://puentes.intech5g.com/" target="_blank" className="link login">Login</a>
                    <a href="http://puentes.intech5g.com/" target="_blank" className="button">Signup</a>
                </div>
                <div onClick={ handleMenu } className={ `hero__header-res-nav ${ menuOpened ? 'opened' : '' }` }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
            <div className="hero__body">
                <div className="hero__body-item">
                    <h1>More than just shorter links</h1>
                    <p className="text">
                        Build your brand's recognition and get detailed<br/>
                        insights on how your links are performing
                    </p>
                    <a href="http://puentes.intech5g.com/" target="_blank" className="button">Get Started</a>
                </div>
                <div className="hero__body-item">
                    <img alt="heroImg" className="hero__body-item-photo" src={ HeroImg } />
                </div>
            </div>
        </div>
    )
}
