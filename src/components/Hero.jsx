import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen md:h-screen  bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto md:m-auto">
        <div className="flex flex-col  md:items-start w-full px-2 py-8 justify-center">
          <p className="text-2xl text-center md:text-left">
            Unique Sequencing & Production
          </p>
          <h1 className="py-3 text-5xl md:text-7xl my-4 md:my-0 font-bold text-center md:text-left">
            Cloud Management
          </h1>
          <p className="text-2xl text-center md:text-left">
            This is our Tech brand.
          </p>
          <button className="py-3 px-6 sm:w-[60%] my-4 mx-auto md:mx-0">
            Get Started
          </button>
        </div>
        <div className="hidden md:flex">
          <img
            className="md:w-full h-[270px] md:h-auto mx-auto"
            src={bgImg}
            alt="/"
          />
        </div>
        <div
          className="md:absolute  flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Data Services</p>
          <div className="flex flex-col md:flex-row mx-auto md:justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CloudUploadIcon className="h-6 text-indigo-600" /> App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-600" /> Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
