import React from 'react'
import ProjectsCard from './ProjectsCard'


export default function Projects() {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
        <h1 className="text-2xl font-bold md:text-4xl text-white ml-16 ">Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5 items-center justify-around'>
            <ProjectsCard 
            title="Blogging Website"
            main="this is a blogging website created in next.js and used react component library"
             />
            <ProjectsCard 
            title="Fashion Website" 
            main="this is a blogging website created in next.js and used react component library" 
            />
            <ProjectsCard 
            title="Youtube Clone" 
            main="this is a blogging website created in next.js and used react component library" 
            />
        </div>
    </div>
  )
}
