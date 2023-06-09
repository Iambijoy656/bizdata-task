import React from "react";
import headPic from "../../assets/head.png";
import mikePic from "../../assets/mike.jpg";
import pic from "../../assets/pic.png";
const GoalSection = () => {
  return (
    <section className="mt-10">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <div className="flex flex-col px-8 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
          <div className="flex space-x-2 sm:space-x-4">
            <h1 className="text-4xl font-bold tracking-wider">
              We belived in making your dreamsand goals a reality
            </h1>
          </div>
          <div className="flex justify-center items-center my-5">
            <div className="p-5">
              <img className="w-10 mb-8 mt-3" src={headPic} alt="" />
              <h2 className="font-sm font-bold">Targeted Solutions</h2>
              <p>We belived in making your dreamsand goals a reality</p>
            </div>
            <div className="p-5 my-5">
              <img className="w-28" src={mikePic} alt="" />
              <h2 className="font-sm font-bold">Marketing Solutions</h2>
              <p>We belived in making your dreamsand goals a reality</p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/4 xl:w-3/5 ">
          <div className="flex items-center justify-center md:p-8">
            <img
              src={pic}
              alt=""
              className="rounded-lg aspect-video sm:min-h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
