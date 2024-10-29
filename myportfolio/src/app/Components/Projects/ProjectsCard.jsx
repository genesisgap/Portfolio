import React from 'react'

export default function ProjectsCard({title, main}) {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-black shadow-xl shadow-slate-900 rounded-2xl'>
        <img className='p-4' src="biggee1.jpeg" alt="biggee image" />
        <h3 className='px-4 text-2xl md:text-2xl font-bold leading-normal'>
            {title}
        </h3>
        <p className='p-4 text-sm md:text-md leading-tight capitalize py-2'>{main}</p>
        <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'> 
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-lg bg-amber-700 capitalize '>
                demo
            </button>
            <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-lg bg-amber-900 capitalize '>
                source code
            </button>
        </div>
    </div>
  )
}
