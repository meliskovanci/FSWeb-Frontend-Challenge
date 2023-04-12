import { Link } from "react-router-dom";
import { useContext} from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ModeContext } from "../contexts/ModeContext";
import { headerData, headerDataTr } from "../data/InfoData";


export default function Header(props) {
    const { handleScroll } = props;
    

    const { handleLanguage, language } = useContext(LanguageContext);
    const { handleMode, mode } = useContext(ModeContext);


    console.log(mode)
    

    return (
        <header id={mode} className="w-11/12 h-[237px] bg-[#F5F5F5] dark:bg-[#252128] ">
            <nav>
                <div className=" flex justify-end ">

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" id={mode} onClick={()=>handleMode()} />
                        <div
                            className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        ></div>
                        <span className="ml-3 font-bold dark:text-[#D9D9D9]">{mode === "light" ? "dark".toUpperCase() : "light".toUpperCase()} MODE</span>
                        
                        
                    </label>

                    
                   
                    <hr className="origin-center rotate-90  border-zinc-500 w-4 h-7 text-base " />

                    <a id={mode} href="#" className="ml-11 text-[#4731D3] font-bold dark:text-[#BAB2E7]" onClick={() => handleLanguage()}>{language === "türkçe" ? "english".toUpperCase() : "türkçe".toUpperCase()}</a> <p className="text-[#777777] ">{language === "türkçe" ? headerData.addition : headerDataTr.addition}</p>
                </div>
                <div className="flex justify-between mt-10">
                    <div className="flex flex-row">
                        <Link className="ml-32 w-12 h-12 p-3 text-center origin-center rotate-45 rounded-full bg-[#EEEBFF] text-[#7B61FF] dark:bg-[#4731D3]" to="/">M</Link>
                    </div>
                    <div className="flex ">

                        {/* <a href="#skills" id={mode}  className="mx-20 mt-3 py-2 text-lg font-medium dark:text-[#6B7280]"> {language === "türkçe" ? headerDataTr.headerSkills : headerData.headerSkills}</a>
                        <a href="#projects" id={mode}  className="mr-10 mt-3 py-2 text-lg font-medium dark:text-[#6B7280]">{language === "türkçe" ? headerDataTr.headerProjects : headerData.headerProjects} </a>
                        <a href="#hire-me" id="button-hire-me"  className="border-2 text-lg font-medium border-[#3730A3] rounded px-8 py-2  mt-3 dark:text-[#3730A3] dark:bg-[#FFFFFF]">{language === "türkçe" ? headerDataTr.headerHireMe : headerData.headerHireMe}</a> */}

                        <Link to="/skills" id={mode} onClick={() => handleScroll(props.scrollToRefSkill)} className="mx-20 mt-3 py-2 text-lg font-medium dark:text-[#6B7280]" >{language === "türkçe" ? headerDataTr.headerSkills : headerData.headerSkills}</Link>
                        <Link to="/projects" id={mode} onClick={() => handleScroll(props.scrollToRefProjects)} className="mr-10 mt-3 py-2 text-lg font-medium dark:text-[#6B7280]" >{language === "türkçe" ? headerDataTr.headerProjects : headerData.headerProjects}</Link>
                        <Link to="/hire-me" id="button-hire-me" onClick={() => handleScroll(props.scrollToRefHireMe)} className="border-2 text-lg font-medium border-[#3730A3] rounded px-8 py-2  mt-3 dark:text-[#3730A3] dark:bg-[#FFFFFF]">{language === "türkçe" ? headerDataTr.headerHireMe : headerData.headerHireMe}</Link>
                    </div>
                </div>
            </nav>
        </header>

    );
}