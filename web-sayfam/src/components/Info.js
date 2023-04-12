import { Link } from "react-router-dom";

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ModeContext } from "../contexts/ModeContext";

import { headerData } from "../data/InfoData";
import { headerDataTr } from "../data/InfoData";
import { profileAboutMe } from "../data/InfoData";

import github from "../images/github.png"
import linkedIn from "../images/LinkedIn.png"

export default function PersonalComponent(props) {

    const {language} = useContext(LanguageContext);
    const { handleMode, mode } = useContext(ModeContext)

    return (

        <section className="w-11/12 h-[348px] ml-16 flex flex-row">
            <div className="">
                <div id={mode} className="flex flex-row mt-8 text-xl text-[#4338CA] dark:text-[#B7AAFF] ">
                    <hr id={mode} className="ml-20 m-4 w-28 flex text-end " />
                    <p>{language === "türkçe" ? headerDataTr.infoName : headerData.infoName}</p>
                </div>
                <div id={mode} className="flex ml-16 text-5xl not-italic font-semibold w-4/5 mt-5 dark:text-[#AEBCCF]">
                    <h2>{headerData.infoJob}</h2>
                    
                </div>
                <div>
                    <div id={mode} className="mt-16 ml-16 w-3/5 h-32 text-lg dark:text-[#FFFFFF]">{language === "türkçe" ? headerDataTr.information : headerData.information}</div>
                </div>
                <div id={mode} className="flex justify-center w-[450px] h-20">
                    
                    <a href="#hire-me" className="flex justify-center p-3 ml-16 w-48 h-14 text-lg font-medium text-[#FFFFFF] bg-[#3730A3] border-2 rounded-md dark:bg-[#E1E1FF] dark:text-[#000000]" >{language === "türkçe" ? headerDataTr.infoButtonHireMe : headerData.infoButtonHireMe}</a>
                    {/* <Link id={mode} className="flex justify-center p-3 ml-16 w-48 h-14 text-[#FFFFFF] bg-[#3730A3] border-2 rounded-md" to="/hire-me">{language === "türkçe" ? headerDataTr.infoButtonHireMe : headerData.infoButtonHireMe}</Link> */}
                    
                    <a href="https://github.com/meliskovanci" target="_blank" className="ml-5 w-48 h-14  flex items-center gap-2 border-2 rounded-md p-2 text-lg dark:bg-[#FFFFFF] dark:text-[#E1E1FF]">
                        <img src={github} alt="github" className="dark:bg-[#BAB2E7] "/> <span> GitHub</span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/melis-kovanc%C4%B1-79755888/" target="_blank" className="ml-5 w-48 h-14 rounded-md flex items-center gap-2 border-2 p-2 text-lg dark:bg-[#FFFFFF] dark:text-[#E1E1FF]">
                    <img src={linkedIn} alt="linkedin" className="dark:bg-[#BAB2E7] "/> <span>LinkedIn</span>
                    </a>
                </div>
            </div>
            <div className="w-[476px] h-[375px] mt-8 mr-2">
                
                    <img src={profileAboutMe.mainImg} alt="resim" className=" rounded-3xl shadow-lg " />
                
            </div>
        </section>
    );
}