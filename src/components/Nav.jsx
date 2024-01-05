import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    const divStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/law.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    
        /* Tambahkan properti berikut untuk efek kaca: */
        backdropFilter: 'blur(5px)',
        backgroundBlendMode: 'screen',
        opacity: 0.85,
      };
    return(
    <>
        <div className="flex  justify-between items-center  z-50 font-semibold	" >
            <div className="flex">
                <a href="#">
            <img src="../images/logo.jpg"/>
                </a>
            </div>
            <div className="flex justify-end gap-4 mr-4 text-primary " >
            <div className="space-x-4">
                    <a  
                    className="hover:bg-flow hover:text-primary hover:p-2 hover:rounded-xl"
                    onClick={()=>{
                            const homeElement = document.getElementById("home");
                            if(homeElement){
                                homeElement.scrollIntoView({behavior:"smooth"})
                            }
                        }}>
            <Link to="/">Home</Link>
            
                    </a>
                    <a>
                    <button
                    className="hover:bg-flow hover:text-primary hover:p-2 hover:rounded-xl"
                    onClick={() => {
            const contactElement = document.getElementById("services");
            if (contactElement) {
            contactElement.scrollIntoView({ behavior: "smooth" });
            }
        }}
>Services
</button>
<Link to="/"></Link>

                    </a>
                    <a>
                    <button
                    className="hover:bg-flow hover:text-primary hover:p-2 hover:rounded-xl"
                    onClick={() => {
            const contactElement = document.getElementById("team");
            if (contactElement) {
            contactElement.scrollIntoView({ behavior: "smooth" });
            }
        }}
>Meet The team
</button>
                    </a>
                    <a                     className="hover:bg-flow hover:text-primary hover:p-2 hover:rounded-xl"
>
            <Link to="/about">About Us</Link>
                    </a>
            </div>
            </div>
        </div>
    </>
    )
}

export default Nav;