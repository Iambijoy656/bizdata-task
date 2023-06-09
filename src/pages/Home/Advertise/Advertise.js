import React from "react";

const Advertise = () => {
  return (
    <section className="mt-10">
      <div className="container flex flex-col-reverse mx-auto lg:flex-row">
        <div className="flex flex-col px-8 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
          <div className="flex space-x-2 sm:space-x-4">
            <h1 className="text-4xl font-bold tracking-wider">
              Business dedicated to creating, planning advertising
            </h1>
          </div>
          <p className="text-gray-400 font-semibold text-justify">
            Our business is dedicated to creating and planning advertising
            strategies that make a significant impact for our clients. We
            understand that effective advertising goes beyond just promoting a
            product or service; it is about capturing attention, sparking
            interest, and inspiring action. With a team of creative minds and
            strategic thinkers, we work closely with our clients to understand
            their goals, target audience, and brand essence. We believe in
            crafting advertising campaigns that not only align with our clients
            objectives <br /> <br />
            but also resonate with their customers on a deep and meaningful
            level.
          </p>
          <button className="btn bg-[#fe8e5e] text-white hover:bg-orange-400 w-64">
            Get Started
          </button>
        </div>
        <div className="lg:w-2/4 xl:w-3/5 ">
          <div className="flex items-center justify-center md:p-8  md:mt-10">
            <img
              src="https://img.freepik.com/free-vector/typing-concept-illustration_114360-4121.jpg?w=2000"
              alt=""
              className="rounded-lg aspect-video sm:min-h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
