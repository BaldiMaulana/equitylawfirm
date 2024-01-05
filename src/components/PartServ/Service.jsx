import React from "react";
import Ligi from "./Ligi";

const Service = () => {

    const divStyle = {
        backgroundImage: `url('https://images.unsplash.com/photo-1603644448048-28a7e5122f0a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        blur:"dark"
    };

    return(
        <div className=" h-full  text-primary ease-in border-8 border-black -z-10" style={divStyle} >
            <div className="flex justify-center items-center text-5xl font-semibold">
                <h1 className="text-white">Services</h1>
            </div>
            <div className="md:flex grid gap-2"> 
                <Ligi 
                    title="Litigation" 
                    imageName="Icon-1.png"
                    description="Our litigation services are focused on resolving legal disputes through the court system.We provide expert legal representation to help you achieve your desired outcomes in legal matters"/>
                <Ligi 
                    title="Non-Litigation" 
                    imageName="Icon-2.png"
                    description="Our non-litigation services encompass a wide range of legal aspects outside of the courtroom. This includes negotiations, mediations, arbitrations, and alternative dispute resolutions to help you reach your legal goals without going to court"/>
                <Ligi 
                    title="Legal Consultation" 
                    imageName="Icon-3.png"
                    description="We provide comprehensive legal consultations. If you need legal advice regarding specific issues, our team offers expert insights and tailored solutions."/>
            </div>
        </div>
    )
}

export default Service;