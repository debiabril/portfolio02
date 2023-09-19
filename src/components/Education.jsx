import React from 'react'
import educationJson from '../utils/education.json'

export const Education = () => {
    return (
        <>
            <div className=' w-full h-full bg-education bg-cover '>
                <div className='flex flex-wrap justify-end gap-6 pb-80 sm:pr-10 lg:pr-0 pt-4 w-[97vw] -z-10'>
                {educationJson?.map((education,index) =>{
                    return (
                        <div className="card w-64 glass" key={index}>
                            <figure><img src={education.imgE} alt="car!"/></figure>
                            <div className="card-body text-white text-sm">
                                <h2 className="card-title font-bold">{education.tituloE}</h2>
                                <p className='text-xs'>{education.descripcionE}</p>
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