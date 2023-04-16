import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ModeContext } from "../contexts/ModeContext";
import { headerData, headerDataTr } from "../data/InfoData";

import "./Toggle.css"


export default function Header(props) {
    const { handleScroll } = props;


    const { handleLanguage, language } = useContext(LanguageContext);
    const { handleMode, mode } = useContext(ModeContext);


    console.log(mode)


    return (
        <header id={mode} className="w-11/12 h-[237px] bg-[#FFFFFF] dark:bg-[#252128] ">
            <nav>
                <div className=" flex  justify-end pt-2 ">
                    <div className=" flex  justify-end pt-5">

                        <input type="checkbox"  value="check" id="toggle_checkbox" onClick={() => handleMode()} />
                        <label htmlFor="toggle_checkbox" value="check">

                            <div id="star">
                                <div class="star" id="star-1">★</div>
                                <div class="star" id="star-2">★</div>
                            </div>
                            <div id="moon"></div>

                        </label>
                        <a id={mode} href="#" className="ml-3 font-bold dark:text-[#D9D9D9]" onClick={() => handleMode()}>{mode === "light" ? "DARK" : "LİGHT"} MODE</a>
                    </div>

                   


                    <hr className="origin-center rotate-90  border-zinc-500 w-4 h-7 text-base mt-5" />

                    

                    <button onClick={() => handleLanguage()}> 
                    <span className="ml-11 text-[#4731D3] font-bold dark:text-[#BAB2E7]" > {language === "türkçe" ?  headerData.addition1 : headerDataTr.addition1}</span>  
                     <span className="text-[#777777] "> {language === "türkçe" ?  headerData.addition2 : headerDataTr.addition2}</span>
                
                    </button>
                
                    </div>


                <div className="flex justify-between mt-10">
                    <div className="flex flex-row">
                        <Link className="ml-32 w-12 h-12 p-3 text-center origin-center rotate-45 rounded-full bg-[#EEEBFF] text-[#7B61FF] dark:bg-[#4731D3]" to="/">M</Link>
                    </div>
                    <div className="flex ">

                        

                        <Link to="/skills" id={mode} onClick={() => handleScroll(props.scrollToRefSkill)} className="mx-20 mt-3 py-2 text-lg font-medium dark:text-[#6B7280]" >{language === "türkçe" ? headerDataTr.headerSkills : headerData.headerSkills}</Link>
                        <Link to="/projects" id={mode} onClick={() => handleScroll(props.scrollToRefProjects)} className="mr-10 mt-3 py-2 text-lg font-medium dark:text-[#6B7280]" >{language === "türkçe" ? headerDataTr.headerProjects : headerData.headerProjects}</Link>
                        <Link to="/hire-me" id="button-hire-me" onClick={() => handleScroll(props.scrollToRefHireMe)} className="border-2 text-lg font-medium border-[#3730A3] rounded px-8 py-2  mt-3 dark:text-[#3730A3] dark:bg-[#FFFFFF]">{language === "türkçe" ? headerDataTr.headerHireMe : headerData.headerHireMe}</Link>
                    </div>
                </div>
            </nav>
        </header>

    );
}