import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Hero = () => {
  const [state, setState] = useState(false);
  const [signinModal, setSigninModal] = useState(false);
  const [signupModal, setSignUpModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate()

  const fromSignIntoSignUp = () => {
    setSignUpModal(true);
    setSigninModal(false);
  };

  const fromSignupIntoSignIn = () => {
    setSignUpModal(false);
    setSigninModal(true);
  };

  // State to hold the dynamic style
  const [style, setStyle] = useState({
    position: 'absolute',
    top: '10%',
    left: '75%',
    transform: 'translateX(-50%)',
  });

  useEffect(() => {
    // Function to update the style based on window width
    function updateStyle() {
      if (window.innerWidth < 640) {
        setStyle({
          ...style,
          position: "absolute",
          top: '10%',
          left: '50%',
          transform: "translateX(-50%)",
        });
      } else {
        setStyle({
          ...style,
          position: "absolute",
          top: '10%',
          left: '75%',
          transform: "translateX(-50%)",
        });
      }
    }

    // Update style on component mount and window resize
    updateStyle();
    window.addEventListener('resize', updateStyle);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateStyle);
  }, []);

  return (
    <>
      {/* <img src={runningman} className=' mt-[15%] md:mt-[5%] md:ml-[12%] md:ml-[1%]' /> */}
      <div
        className=""
        style={style}
      >
        <p
          className="text-gray-200 mx-auto whitespace-pre-wrap  text-center text-5xl md:text-7xl  font-bold">
          <span className="text-GebetaMain">GebetaMaps</span>
          {"\n"}
          Routing, Direction {"\n"}
          and {"\n"}
          Map API Service
        </p>

        <p
          className="text-center mt-[10%] md:mt-[15%] text-[#A0AABA] md:text-2xl text-xl"
          style={{ fontFamily: "Zen Dots" }}
        >
          LET US FIND YOUR WAY
        </p>
        <div className=" mt-[20%] md:mt-[10%] inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 w-full max-w-6xl mx-auto space-y-5 md:space-y-0 ">
        <button
          onClick={() => navigate('/pricing')}
          className="rounded-full  md:mt-[0%] text-lg font-semibold px-6 py-3 bg-GebetaMain text-white "
        >
          <span className="px-5">Get Started</span>
        </button>

        <Link to="/documentation">
          <button className="rounded-full  md:mt-[0%]  text-lg font-semibold px-6 py-3  border border-gray-700 text-white ">
            <span className="px-5">Read Docs</span>
          </button>
        </Link>
      </div>
      </div>
    </>
  );
};

export default Hero;
