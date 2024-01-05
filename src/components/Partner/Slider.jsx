import React, {useState} from "react";
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from "react-icons/rx"


const Slider = () => {
    const slides = [
    { url : "../images/1.jpeg"},
    {url : "https://images.unsplash.com/photo-1587846814306-22afe89cacfe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {url : "https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {url : "https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]

    const [currentIndex, setCurrentIndex] = useState(0)
    
    const prevSlide = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 :currentIndex -1;
        setCurrentIndex(newIndex);
    }
    
    const nextSlide = () =>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }


    return(
        <div className="max-w-[1000px] h-[600px] w-full m-auto py-16 px-4 relative group">
            <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} 
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
            {/* left arrrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
            {/* right arrrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide,slideIndex)=> (
                    <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                        <RxDotFilled/>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Slider;