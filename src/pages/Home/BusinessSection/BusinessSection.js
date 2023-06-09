import React from "react";
import pic from "../../assets/pics.png";

const BusinessSection = () => {
  return (
    <section className="my-10">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div className="w-full lg:w-1/2  p-10">
          <img src={pic} alt="" />
        </div>
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12 ">
          <h2 className="text-4xl font-bold tracking-wider">
            Business that serves a representives , acting of another
          </h2>
          <p className="mt-4 mb-8 text-sm font-semibold text-justify text-gray-400">
            Partnering with us means gaining a dedicated team of professionals
            who are passionate about helping your business thrive. We are
            committed to delivering advertising solutions that not only generate
            brand awareness but also drive conversions and foster long-term
            customer loyalty. When it comes to creating and planning
            advertising, we are your trusted partner. Let us take your brand to
            new heights and captivate audiences with compelling and impactful
            campaigns that make a difference.
          </p>
          <button className="btn py-4 bg-[#ffe8df] text-orange-400 hover:bg-orange-100 w-64">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
