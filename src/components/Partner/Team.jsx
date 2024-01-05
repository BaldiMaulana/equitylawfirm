import Slider from "./Slider";
import "./team.css"
const Team = () => {
  
  const divStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Brown.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    blur:"dark"
};

  return (
    <div className="text-primary h-screen bg-flow pt-10 slide-container border-y-4 border-white " style={divStyle} id="team">
      <div className="flex justify-center items-center text-5xl font-semibold">
        <h1>Team</h1>
      </div>
      <Slider/>
    </div>
  );
};

export default Team;
