
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ModeContext } from "../contexts/ModeContext";

import { skillsData } from "../data/SkillsData";
import { skillsDataTr } from "../data/SkillsData";


export default function PersonalComponent() {

    const { language } = useContext(LanguageContext);
    const { handleMode, mode } = useContext(ModeContext)

    return (

        <section id="skills" className="w-11/12 h-[250px] mt-36 ">
            <div className="">
                <div id={mode} className="ml-32 mt-8 text-5xl not-italic font-semibold w-1/3 dark:text-[#AEBCCF]">

                    <p>{language === "türkçe" ? "Yetenekler" : "Skills"}</p>
                </div>
                <div id={mode} className="ml-32 mt-5 flex flex-row mb-14 pb-5">
                    <div >
                        <p className="text-[#4338CA] text-3xl mr-32 dark:text-[#BAB2E7]">{skillsData.headerJavaScript}</p>
                        <div id={mode} className="text-[#6B7280] w-[300px] h-12 mr-80 mt-7 dark:text-[#FFFFFF]">{language === "türkçe" ? skillsDataTr.infoJavaScript : skillsData.infoJavaScript}</div>
                    </div>
                    <div >
                        <p className="text-[#4338CA] text-3xl mr-32 dark:text-[#BAB2E7]">{skillsData.headerReactJs}</p>
                        <div id={mode} className="text-[#6B7280] w-[300px] h-12 mr-80 mt-7 dark:text-[#FFFFFF]">{language === "türkçe" ? skillsDataTr.infoReactJs : skillsData.infoReactJs}</div>
                    </div>
                    <div >
                        <p className="text-[#4338CA] text-3xl dark:text-[#BAB2E7]">{skillsData.headerNodeJs}</p>
                        <div id={mode} className="text-[#6B7280] w-[300px] h-12 mt-7 dark:text-[#FFFFFF]">{language === "türkçe" ? skillsDataTr.infoNodeJs : skillsData.infoNodeJs}</div>
                    </div>
                </div>

            </div>

            <hr className="ml-32 mt-14 w-11/12 flex text-end"  />

        </section>
    );
}