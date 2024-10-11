import React from 'react';
import { FaMagento, FaPaintBrush, FaCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="text-white flex flex-col md:flex-row items-center justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
        <h2 className="text-2xl md:text-4xl font-bold ml-16 mb-8">About</h2>
        <img className="w-60 rounded-full" src="/adenomo.jpeg" alt="About img" />
      </div>

      <div className="w-full md:w-2/3 lg:w-3/4 md:pl-8">
        <ul>
          <div className="flex gap-3 py-4">
            <FaMagento size={30} className="mt-1" />
            <span className="w-full md:w-96 lg:w-full">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
              <p className="text-sm md:text-md leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor quae perferendis dolorum pariatur nisi hic, officiis totam ad adipisci quos commodi aperiam omnis? Provident velit suscipit modi vel veniam?
              </p>
            </span>
          </div>

          <div className="flex gap-3 py-4">
          <FaMagento size={30} className="mt-1" />
            <span className="w-full md:w-96 lg:w-full">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">Product Design Developer</h1>
              <p className="text-sm md:text-md leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident velit suscipit modi vel veniam.
              </p>
            </span>
          </div>

          <div className="flex gap-3 py-4">
          <FaMagento size={30} className="mt-1" />
            <span className="w-full md:w-96 lg:w-full">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
              <p className="text-sm md:text-md leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolor quae perferendis dolorum pariatur nisi hic, officiis totam ad adipisci quos commodi aperiam omnis.
              </p>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
}
