import React from 'react'
import projectJason from '../utils/projects.json'

export const Projects = () => {
    return (
        <>
        <div className=' w-full h-full bg-project  bg-cover'>
        <div className='flex flex-wrap justify-end md:justify-center gap-6 pb-80 sm:pr-10 sm:pl-32 lg:pr-0 pt-4 w-[97vw] -z-10'>
            {
                projectJason?.map((project,index) =>{
                    return(
                        <div className="card w-64 sm:w-72 glass" key={index}>
                            <figure><img src={project.imgP} alt="car!"/></figure>
                            <div className="card-body text-white">
                                <h2 className="card-title font-bold">{project.nombreP}</h2>
                                <p>{project.descripcionP}</p>
                                <p>{project.fechaP}</p>
                                <div className="card-actions justify-end">
                                    <a target='_blank' href={project.linkP}className="btn btn-primary">Link Proyecto</a>
                                </div>
                            </div>
                        </div>
                    )
                    }
                )
            }
        </div>
        </div>
        </>
    )
}