import React from "react";
import Link from "next/link";
import TypeComponent from "./TypeAnimation";

const Hero = () => {
  return (
    <div className="max-w-[800px] mt-[10px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <p className="text-[#00df9a] font-bold p-2"> EXPLORE AI CAPABILITIES</p>
      <h1 className="md:text-6xl sm:text-5xl text-3xl font-bold md:py-6">
        EXTAND YOUR BORDERS
      </h1>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-2xl">
            Search, learn, analize
          </p>
          <div className=" flex w-32">
            <TypeComponent />
          </div>
        </div>
      </div>
      <Link 
     href="/books/booksList"
      className="bg-[#00df9a] w-[200px] rounded-md my-6 font-medium mx-auto py-3 text-black">
        Book Summary
      </Link>
    </div>
  );
};

export default Hero;