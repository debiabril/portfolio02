import React from 'react'
import educationJson from '../utils/education.json'

export const Education = () => {
    return (
        <>
        <div className=' w-full h-full bg-education bg-cover '>
        <div className='flex flex-wrap justify-end gap-6 pb-80 w-[80%] -z-10'>
        {educationJson?.map((education,index) =>{
            return (
                <div className="card w-96 glass" key={index}>
                    <figure><img src={education.imgE} alt="car!"/></figure>
                    <div className="card-body text-white">
                        <h2 className="card-title font-bold">{education.tituloE}</h2>
                        <p>{education.descripcionE}</p>
                        <p>{education.fechaE}</p>
                    </div>
                </div>
            )
            })
        }
        </div>
        </div>
        </>
    )
}