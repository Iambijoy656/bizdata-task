import React from "react";
import img from "../../assets/bannerPic.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-[#fff2da]">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl font-bold my-10 tracking-wider">
              We belived in making your dreams <br /> and goals a reality
            </h1>

            <button className="btn bg-[#fe8e5e] hover:bg-orange-400 text-white px-10">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-5 bg-gradient-to-b from-[#fff2da] to-white ">
        <img className="" src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
