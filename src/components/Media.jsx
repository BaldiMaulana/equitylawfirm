import React from "react";
import YouTubeVideo from "./YouTubeVideo";

const Media = () => {

    const openYouTubeChannel = () => {
        const channelURL = "https://www.youtube.com/@muhammadrinosyahputra2569";
        window.open(channelURL, "_blank");
      };
    
    const videoSource = "https://www.youtube.com/embed/yt86_bkjKKk";
    const videoSource2 = "https://www.youtube.com/embed/phglX5inO_Q";
    const videoSource3 = "https://www.youtube.com/embed/yymk6djuQyE";


    const divStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/book.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        blur:"dark"
    };

    
    return (
        <div className=" h-full bg-flow text-primary p-5" style={divStyle} >
            <div className="flex justify-center items-center text-5xl font-semibold">
                <h1>Our Video</h1>
            </div>
            <div className="md:grid grid-col mt-5  ">
            <div className="h-auto justify-center items-center lg:gap-4 w-full sm:grid sm:gap-y-4 lg:flex  ">
                <YouTubeVideo videoSrc={videoSource} />
                <YouTubeVideo videoSrc={videoSource2}/>
                <YouTubeVideo videoSrc={videoSource3}/>
            </div>
            <div className="flex justify-center items-center text-2xl mt-2  ">
            <a
                        href="https://www.youtube.com/@muhammadrinosyahputra2569"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/80 shadow-xl rounded-xl p-2 hover:bg-primary/60 hover:text-flow"
                    >
                        More video
                    </a>
    </div>
            </div>
        </div>
    );
};

export default Media;
