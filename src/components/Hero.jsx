import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const Hero = () => {
  const [loopText] = useTypewriter({
    words: ["dKash", "Digital Cash", "Not Spider Guy"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section id="home">
      <div className="container max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex items-center justify-between sm:flex-col md:flew-row">
          <div className="w-full">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-primaryColor font-[600] text-[20px] p-2 mt-6"
            >
              BANKING, ELEVATED FOR YOU
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[3.3rem] sm:text-6xl md:text-7xl md:py-2"
            >
              Your Financial Oasis.
            </h1>
            <div>
              <p
                data-aos="fade-right"
                data-aos-duration="1500"
                className="md:text-4xl sm:text-3xl text-xl font-[700] pt-2"
              >
                Secure, Simple Banking with
                <span className=" text-gray-500 pl-2 font-[800]">
                  {loopText}
                </span>
                <span className="text-[#FF073A]">
                  <Cursor />
                </span>
              </p>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex text-headingColor font-[500] text-[15px] p-6 md:text-xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <Link to="/register">
                <button className="bg-primaryColor text-white font-[500] items-center hover:bg-smallTextColor ease-in duration-200 py-2 pl-4 pr-3 rounded-full">
                  Get Started<i class="ri-arrow-right-s-line"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
