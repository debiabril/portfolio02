import axios from 'axios'
import React, { useEffect, useState } from 'react'
import skillsJson from '../utils/skills.json'


export const Skills = () => {
    /* const [skillsData, setSkillsData] = useState([skillsJson])
    console.log(skillsJson); */
    return (
        <>
            <div className=' w-full h-full bg-skillsMobile md:bg-skills bg-cover'>
                <div className='flex flex-wrap items-center justify-center gap-3 px-16 sm:px-56 pb-80 lg:pt-40'>
            {
                skillsJson?.map((skill,index) =>{
                    return(
                    <div className='w-25 md:w-45 flex flex-col items-center justify-center mx-2 p-4' key={index}>
                        <div className="radial-progress mb-1 bg-purple-800 text-primary-content border-4 border-purple-800"  style={{"--value":skill.porcentaje}}>{skill.porcentaje}%</div>
                        <div className=' p-2 text-white rounded-lg flex  bg-black text-bold text-center font-bold '>{skill.nombre}</div>
                    </div>)
                })
            }
                </div>
            </div>
        </>
    )
}