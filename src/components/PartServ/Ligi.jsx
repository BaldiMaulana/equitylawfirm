import React from "react";

const Ligi = ({ title, description,imageName }) => {
    const imagePath = `${process.env.PUBLIC_URL}/images/${imageName}`;

    return (
        <div className="h-full bg-flow m-2 rounded-xl grid-row text-center shadow-xl hover:bg-clas/90 hover:text-white/90 ">
            <div className="flex justify-center items-center font-semibold">
                <h1>{title}</h1>
            </div>
            <div className="flex justify-center p-2">
                <img src={imagePath} alt="Icon" className="w-20 h-20" />
            </div>
                <div className="w-fit p-2">
                <p>{description}</p>
                </div>
        </div>
    )
}

export default Ligi;
