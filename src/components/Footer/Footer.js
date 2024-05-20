// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="/logo192.png" alt="AmeSabu Logo" className="footer-logo" />
                <p>© Copyrights Reserved 2024 © AmeSabu</p>
            </div>
            <div className="footer-center">
                <div className="footer-socials">
                <a href="https://facebook.com"> <img src="/facebook.png" alt="Facebook" /> 
                </a> <a href="https://instagram.com"> <img src="/instagram.png" alt="Instagram" />
                 </a> <a href="https://twitter.com"> <img src="/twitter.png" alt="Twitter" /> </a>
                </div>
                <p>Follow Amesabu</p>
            </div>
            <div className="footer-right">
                <address className="footer-address">
                    Amesabu Private Limited, 49 - Be.D.A Complex, 1st Floor, Near City Bus Stand, Berhampur-760001
                    <br />
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Open Maps</a>
                    <br />
                    +91 9681903449
                </address>
            </div>
        </footer>
    );
};

export default Footer;
