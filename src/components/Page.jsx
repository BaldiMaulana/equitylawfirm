import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Service from "./PartServ/Service";
import Media from "./Media";
import Footer from "./Footer/Footer"
import Team from "./Partner/Team";
import Nav from "./Nav";
const Page = () => {

    const divStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/law.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        blur: "dark",
        zIndex: 1,
    };


    return(
        <div className="relative"  id="home">
        <div className="-z-grid  justify-between items-center h-screen bg-flow p-4 text-white sticky" style={divStyle}>
        <div className="z-50 ">
        <Nav />
      </div>
        <div className="flex mt-[200px]">
            <div className="">
                <h1 className="text-3xl font-semibold">Hello , Wellcome</h1>
            <div className="pt-2">
                <h1 className="w-2/3">Equity Law Firm offers expertise in both litigation and non-litigation legal services.Your trusted partner in legal matter.</h1>
            </div>
                <div className="items-end pt-4 gap-4 flex ">
                    <a href="https://wa.me/6281261975009" target="_blank" rel="noopener noreferrer" className="bg-yellow text-white p-3  shadow-xl rounded-xl hover:bg-primary">
                <FontAwesomeIcon icon={faWhatsapp} size="1x"  href="#"/>
                <span className="ml-1">Let's Talk</span>
                    </a>
                </div>
            </div>

            <div className="relative  ">
    <div className="absolute top-0 left-0 w-full h-auto ">
        <img src="../images/vector.png" alt="vector" className="w-full h-full object-cover " />
    </div>
    <div className="relative ">
        <img src="../images/logo2.png" alt="logo" className="w-full h-auto" />
    </div>
    </div>
        </div>

    </div>
    <div id="services" className="z-0">

        <Service/>
        <Media/>
        <Team/>
        <Footer/>
    </div>
    </div>
    )
}

export default Page;