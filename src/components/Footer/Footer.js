// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="flex justify-between items-center py-8 px-16 bg-[#080809] footer-bg">
            <div>
                <img src="/logo.svg" alt="AmeSabu Logo" className="mb-2" />
                <p className="text-sm text-[#C3C3C3]">Copyrights Reserved 2024 © AmeSabu</p>
            </div>
         
                <div className="flex flex-col gap-3">
                    <p className="text-xl">Follow Amesabu</p>
                    <div className="flex flex-col gap-3">
                    <a href="https://facebook.com" className="flex items-center gap-x-2 text-[#C3C3C3]">
                        <img src="/facebook.png" alt="Facebook" className="w-8"/> Facebook
                    </a>
                    <a href="https://instagram.com" className="flex items-center gap-x-2 text-[#C3C3C3]">
                        <img src="/instagram.png" alt="Instagram" className="w-8" /> Instagram
                    </a>
                    <a href="https://twitter.com" className="flex items-center gap-x-2 text-[#C3C3C3]">
                        <img src="/twitter.png" alt="Twitter" className="w-8"/> Twitter
                    </a>
                    </div>
                </div>
          
            <div className="flex gap-x-6">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.33236302082798!2d84.80316138274861!3d19.3120108634705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d51b19d64ee6d%3A0xb8815c3f9e91450f!2sAMESABU!5e0!3m2!1sen!2sin!4v1728666506853!5m2!1sen!2sin" 
            width="140" height="120" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="border-none rounded-xl"></iframe>

                    <div className="flex flex-col gap-3 bg-[#121212] rounded-lg text-base p-4">
                        <p className="text-[#C3C3C3]">Amesabu Private Limited, 49 - Be.D.A Complex, <br /> 1st Floor, Near City Bus Stand,<br />Berhampur-760001</p>
                        <div className="flex gap-x-1 items-center">
                            <img src="/phone-icon.png" alt="phone icon" className="w-6" />
                            <a href="tel:+919681903449" className="text-[#C3C3C3]">+91 9681903449</a>
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;
