import React from 'react'
import projectJason from '../utils/projects.json'

export const Projects = () => {
    return (
        <>
        <div className=' w-full h-full bg-project  bg-cover'>
        <div className='flex flex-wrap justify-end gap-6 pb-80 w-[80%] -z-10 pt-40 pb-30'>
            {
                projectJason?.map((project,index) =>{
                    return(
                        <div className="card w-96 glass" key={index}>
                            <figure><img src={project.imgP} alt="car!"/></figure>
                            <div className="card-body text-white">
                                <h2 className="card-title font-bold">{project.nombreP}</h2>
                                <p>{project.descripcionP}</p>
                                <p>{project.fechaP}</p>
                                <div className="card-actions justify-end">
                                    <a href={project.linkP}className="btn btn-primary">Link Proyecto</a>
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