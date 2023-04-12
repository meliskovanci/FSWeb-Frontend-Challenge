import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ModeContext } from "../contexts/ModeContext";
import ok from "../images/ok.png"

export default function Footer() {

    const { language } = useContext(LanguageContext);
    const { mode } = useContext(ModeContext);

    return (
        <div id={mode} className=" bg-[#F9F9F9]  dark:bg-[#141414] ">
            <section id="hire-me" className="flex flex-col ml-32 w-11/12 pt-32 h-[409px]">

                <div className='flex flex-wrap text-5xl not-italic font-semibold w-[500px]'>{language === "türkçe" ? "Bir sonraki projeniz için iletişime geçebilirsiniz" : "Let’s work together on your next product."}</div>
               
                <div className="flex flex-row justify-between my-5">
                    <div className=" flex flex-row h-6 mt-16 p" >
                        <img src={ok} alt="resim" className=''/>
                    <p className="text-[#AF0C48] text-xl dark:text-[#BAB2E7]">
                        meliskovanci@hotmail.com
                    </p>
                    </div>
                

                    <div className="flex justify-end gap-3 mt-16">
                        <a id="personalblog" className="text-[#0A0A14] text-lg dark:text-[#E1E1FF]" target="_blank" href="https://www.instagram.com/melis.kovanci">Personal Blog</a>
                        <a id='github' className="text-[#00AB6B] text-lg" target="_blank" href='https://github.com/meliskovanci'>Github</a>
                        <a id='linkedin' className="text-[#0077B5] text-lg" target="_blank" href='https://www.linkedin.com/in/melis-kovanc%C4%B1-79755888/'>LinkedIn</a>
                    </div>
                </div>


            </section>
        </div>
    );
}