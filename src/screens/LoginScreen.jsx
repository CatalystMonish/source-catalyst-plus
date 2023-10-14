import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import googleLogo from "../images/googleLogo.png";
// import CardTestimonial from "../components/CardTestimonial";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

function LoginScreen() {
  const { googleSignIn, user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const cards = [
    { name: "Aditi", testimonial: "Test" },
    { name: "Monish" },
    { name: "Pratik" },
  ];

  const animateCards = async () => {
    await controls.start({ y: "-100%", transition: { duration: 1 } });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    await controls.start({ y: "100%" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      animateCards();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
      const name = user?.displayName;
      console.log("User", name);
    }
  }, [user]);

  return (
      <div className="t-0 flex h-screen justify-center bg-primary font-lexend font-heading">
        <div className="mx-5  flex h-screen max-w-[900px] flex-col items-center justify-center">
          <div className="my-auto">
            <div>
              {/*<motion.div*/}
              {/*    className="relative z-0 scale-90 blur-sm"*/}
              {/*    animate={controls}*/}
              {/*>*/}
              {/*  <CardTestimonial*/}
              {/*      card={cards[(currentIndex - 1 + cards.length) % cards.length]}*/}
              {/*  />*/}
              {/*</motion.div>*/}
              {/*<motion.div className="relative z-10" animate={controls}>*/}
              {/*  <CardTestimonial card={cards[currentIndex]} />*/}
              {/*</motion.div>*/}
              {/*<motion.div*/}
              {/*    className="relative z-0 scale-90 blur-sm"*/}
              {/*    animate={controls}*/}
              {/*>*/}
              {/*  <CardTestimonial*/}
              {/*      card={cards[(currentIndex + 1) % cards.length]}*/}
              {/*  />*/}
              {/*</motion.div>*/}
            </div>
          </div>
          <p className="text-center font-lexend text-heading font-heading text-white ">
            Welcome to Source Catalyst
          </p>
          <p className="mb-5 text-center text-section-head font-section-head text-[#eaeaea] ">
            LEARN. GROW. UPSKILL
          </p>
          <button
              onClick={handleGoogleSignIn} // Updated to use handleLogin function
              className="w-fit rounded-full  bg-light px-s-20 py-s-17 font-lexend text-label font-label text-dark"
          >
            <div className="flex items-center justify-center gap-2">
              <img alt="google" className="h-6 w-6" src={googleLogo} />
              <span>Continue to Google</span>
            </div>
          </button>
          {/* <button onClick={handleSignOut}>Logout</button> */}
          <div className="h-[50px] w-full"></div>
        </div>
      </div>
  );
}

export default LoginScreen;
