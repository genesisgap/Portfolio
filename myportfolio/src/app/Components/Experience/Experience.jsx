
import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiNetlify } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNetflixFill } from '@remixicon/react';
import { FaAmazon } from 'react-icons/fa';
import { SiMui } from "react-icons/si";


export default function Experience() {
  return (
    <div id="Experience" className="p-10 ml-16 md:p-24">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
        <div className="flex flex-wrap items-center justify-around">
            <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaHtml5 color="orange" size={50} />
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaCss3 color="#1572b6" size={50} />
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaJs color="#F7DF1E" size={50} />
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiVercel  color="white" size={50} />
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaGithub  color="white" size={50} />
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <RiTailwindCssFill color="cyan" size={50} />
                </span>     
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaReact color="#61DAF8" size={50} />
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiNetlify color="white" size={50} />
                </span>
                <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiMui  color="blue" size={50} />
                </span>
            </div>
            <div>
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FcGoogle size={50} />
            <span className="text-white">
                <h2 className="leading-tight">Software Engineer, Google</h2>
                <p className="text-sm leading-tight font-thin">June 2024 - Present</p>
                <ul className="text-sm p-2">
                    <li>- work as software Developer</li>
                    <li>- junior SDE Developer</li>
                </ul>
            </span>
            </div>
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <RiNetflixFill color="#E50914" size={50} />
            <span className="text-white">
                <h2 className="leading-tight">Software Engineer, Netflix</h2>
                <p className="text-sm leading-tight font-thin">June 2024 - Present</p>
                <ul className="text-sm p-2">
                    <li>- work as software Developer</li>
                    <li>- junior SDE Developer</li>
                </ul>
            </span>
            </div>
            <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaAmazon color="#FF9900" size={50} />
            <span className="text-white">
                <h2 className="leading-tight">Software Engineer, Amazon</h2>
                <p className="text-sm leading-tight font-thin">June 2024 - Present</p>
                <ul className="text-sm p-2">
                    <li>- work as software Developer</li>
                    <li>- junior SDE Developer</li>
                </ul>
            </span>
            </div>
            </div>
        </div>
    </div>
  )
}
