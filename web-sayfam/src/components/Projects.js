import { dataProjects } from '../data/ProjectData';
import { dataProjectsTr } from '../data/ProjectData';

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ModeContext } from '../contexts/ModeContext';

export default function Projects(props) {


    const {language} = useContext(LanguageContext);
    const {mode} = useContext(ModeContext);

    
    return (
        <section id={mode} className='w-11/12 h-[600px] content-center flex-wrap gap-20 mt-16 mb-10'>
            <p id="projects" className="ml-32 mt-8 text-5xl not-italic font-semibold dark:text-[#AEBCCF]">{language === "türkçe" ? "Projeleri" : "Projects" }</p>
            <div className=" flex flex-row">
                {(language === "türkçe" ? dataProjectsTr : dataProjects).map((project, index) => (

                    <div key={index} className="flex flex-col ml-32">
                        <img src={project.projectImg} alt="resim" className='w-[300px] h-[180px] mt-8 mr-60'/>
                        <p className='text-3xl font-medium text-[#4338CA] mt-3 dark:text-[#CFCBFF]'>{project.title}</p>
                        <div className="flex flex-wrap w-[300px] gap-[9px] pb-10 mt-3 text-[#6B7280]">{project.details}</div>
                        <div className='flex flex-row gap-2 '>
                            <button className="border-2 border-[#3730A3] text-[#3730A3] px-3 rounded dark:bg-[#383838] dark:text-[#8F88FF]">{project.topics1}</button>
                            <button className="border-2 border-[#3730A3] text-[#3730A3] px-3 rounded dark:bg-[#383838] dark:text-[#8F88FF]">{project.topics2}</button>
                            <button className="border-2 border-[#3730A3] text-[#3730A3] px-3 rounded dark:bg-[#383838] dark:text-[#8F88FF]">{project.topics3}</button>
                        </div>
                        <div className="flex gap-44 font-semibold text-base text-[#3730A3] mt-3 underline decoration-[#3730A3] dark:text-[#E1E1FF]">
                            <a href={project.github} target="_blank">Github</a>
                            <a href={project.wiewSite} target="_blank">View Site</a>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}