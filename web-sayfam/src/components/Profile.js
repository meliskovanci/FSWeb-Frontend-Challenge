import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ModeContext } from "../contexts/ModeContext";
import { profileAboutMe } from "../data/InfoData";
import { profileAboutMeTr } from "../data/InfoData";


export default function Profile() {

    const { language } = useContext(LanguageContext);
    const { mode } = useContext(ModeContext)

    return (
        <section id={mode} className="w-11/12 h-[350px] mt-16">
            <h2 className=" flex flex-row justify-start ml-32 w-36 h-12 mt-5 text-5xl not-italic font-semibold dark:text-[#AEBCCF]">{language === "türkçe" ? "Hakkında" : "Profile"}</h2>
            <div className="flex flex-row justify-start text-left ml-32 ">


                <div>
                    <div>
                        <h3 className="flex flex-col mt-10 text-[#4338CA] text-3xl dark:text-[#BAB2E7]">{language === "türkçe" ? "Kişisel Bilgiler" : "Profile"}</h3>
                    </div>

                    <div className="flex flex-row justify-start mt-5">
                        <div className=" flex flex-col justify-start w-48 h-44 font-semibold text-lg dark:text-[#FFFFFF]">
                            <p><span>{language === "türkçe" ? "Doğum Tarihi" : "Date of Birth"}</span></p>
                            <p><span>{language === "türkçe" ? "İkamet Şehri" : "Home City"}</span></p>
                            <p><span>{language === "türkçe" ? "Eğitim Durumu" : "Education"}</span></p>
                             <br /> 
                            <p><span>{language === "türkçe" ? "Tercih Ettiği Rol" : "Prefered Role"}</span></p>
                        </div>

                        <div className="flex flex-col  text-lg dark:text-[#FFFFFF]">
                            <p>26.07.1990</p>
                            <p>İstanbul</p>
                            <p>{language === "türkçe" ? "İzmir Ekonomi Üniversitesi," : "Izmir University of Economics,"}</p>
                            <p>{language === "türkçe" ? "Matematik Bölümü" : "Mathematics"}</p>
                            
                            <p>Frontend, UI</p>
                        </div>
                    </div>

                </div>


                <div className="flex flex-col mt-10 ml-60">
                    <h3 className="text-[#4338CA] text-3xl  dark:text-[#BAB2E7]">{language === "türkçe" ? "Hakkında" : "About Me"}</h3>
                    <div>
                        <p className="mt-5 w-[558px] h-36 text-lg text-[#6B7280] dark:text-[#FFFFFF]" id={mode}>{language === "türkçe" ? profileAboutMeTr.about : profileAboutMe.about}</p>

                    </div>
                </div>
            </div>
            <hr className="ml-32 mt-10  w-11/12 flex text-end"  />
        </section>

    )
}