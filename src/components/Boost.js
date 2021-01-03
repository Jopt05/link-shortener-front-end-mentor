import React from 'react'
import Icon1 from '../assets/icon-facebook.svg'
import Icon2 from '../assets/icon-twitter.svg'
import Icon3 from '../assets/icon-pinterest.svg'
import Icon4 from '../assets/icon-instagram.svg'


export const Boost = () => {
    return (
        <>
            <div className="booster padding">
                <h2>Boost your links today</h2>
                <button className="button">Get Started</button>
            </div>
            <footer className="footer padding">
                <h2>Shortly</h2>
                <div className="footer__div">
                    <div className="footer__div-links">
                        <p className="footer__div-links-title">Features</p>
                        <a href="#" className="footer__div-links-link">Link Shortening</a>
                        <a href="#" className="footer__div-links-link">Branded Links</a>
                        <a href="#" className="footer__div-links-link">Analytics</a>
                    </div>
                    <div className="footer__div-links">
                        <p className="footer__div-links-title">Resources</p>
                        <a href="#" className="footer__div-links-link">Blog</a>
                        <a href="#" className="footer__div-links-link">Developers</a>
                        <a href="#" className="footer__div-links-link">Support</a>
                    </div>
                    <div className="footer__div-links">
                        <p className="footer__div-links-title">Company</p>
                        <a href="#" className="footer__div-links-link">About</a>
                        <a href="#" className="footer__div-links-link">Our Team</a>
                        <a href="#" className="footer__div-links-link">Careers</a>
                        <a href="#" className="footer__div-links-link">Contact</a>
                    </div>
                </div>
                <div className="footer__social">
                    <img alt="social icon" src={ Icon1 } />
                    <img alt="social icon" src={ Icon2 } />
                    <img alt="social icon" src={ Icon3 } />
                    <img alt="social icon" src={ Icon4 } />
                </div>
            </footer>
        </>
    )
}
