import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div 
    id='Contact'
    className='flex justify-around bg-gray-900 text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className="text-2xl md:text-6xl text-amber-700 font-bold">Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal capitalize'>
                Feel Free to reach out! </h3>
        </div>
        <ul className='text-sm md:text-xl'>
            <li className='flex items-center gap-1'>
            <MdOutlineEmail  size={30}/>
            genesispatrick@gmail.com
            </li>
            <li className='flex items-center gap-2'>
            <CiLinkedin size={30}/>
            linkedin.com/username
            </li>
            <li className='flex items-center gap-2'>
            <FaGithub size={30}/>
            github.com/username
            </li>
        </ul>
    </div>
  )
}
