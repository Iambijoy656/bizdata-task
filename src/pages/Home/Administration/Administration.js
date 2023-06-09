import React from "react";

const Administration = () => {
  return (
    <div className="p-10">
      <div className="flex justify-center  my-5">
        <h1 className="text-4xl font-bold tracking-wider text-center">
          Epartmant local national government <br /> and administrations
        </h1>
      </div>
      <div className=" container flex justify-center p-10 md:h-9/12">
        <img
          className="w-1/2 p-10"
          src="https://img.freepik.com/premium-vector/happy-smiling-man-is-sitting-with-laptop_677474-106.jpg?w=2000"
          alt=""
        />
        <div className=" flex flex-col justify-center items-center w-1/2 p-10">
          <img
            className="w-full mb-5"
            src="https://img.freepik.com/premium-vector/thinking-man-think-bubble-student-table-with-laptop-education-vector-concept-male-character-thoughts-about-online-business_53562-6501.jpg?w=360"
            alt=""
          />
          <img
            src="https://img.freepik.com/premium-vector/happy-businesswoman-isolated-background_764382-4291.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Administration;
