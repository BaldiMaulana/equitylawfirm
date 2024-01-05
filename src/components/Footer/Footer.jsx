import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,  faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Last from "./Last";



const Footer = () => {
    return(
        <div className="  bg-yellow ">
            <div className="flex gap-4">
            <div className="h-full flex justify-center items-center pl-4">
            <div>
                <h1 className="underline text-2xl text-pri">Batam Head Office</h1>
            <div className="sm:w-2/6 text-white "> Jl. Bunga Raya No.3a, RW.4, Lubuk Baja Kota, Kec. Lubuk Baja, Kota Batam, Kepulauan Riau 29432</div>
            </div>
            
        </div>
        <div className="">
        <div >
        <h1 className="underline text-2xl text-pri">Contact Us</h1>
        </div>
        <div className="grid grid-row-4">
                    <a 
                        href="https://www.linkedin.com/in/rinojohnny23" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600">
                        
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                    <a 
                    href="mailto:m.rinosyahputra@gmail.com"
                    className="text-white">
                        <FontAwesomeIcon icon={faEnvelope} /> E-mail
                    </a>
                    <a 
                    className="text-green-800 flex gap-1"
                    href="https://wa.me/6281261975009" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                    </a>
                </div>
                
        </div>
        </div>
        <Last/>
            </div>
    )
}

export default Footer;