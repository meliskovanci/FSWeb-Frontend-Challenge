import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Info from "./components/Info"
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { LanguageContext } from "./contexts/LanguageContext";
import { ModeContext } from "./contexts/ModeContext";
import { useRef } from 'react';



import './App.css';


function App() {

  const [language, setLanguage] = useState(localStorage.getItem("language") ==="english" ? "english": "türkçe");
  const [mode, setMode] = useState(localStorage.getItem("mode")==="light" ? "light" : "dark");



  useEffect(() => {
    if (localStorage.mode === 'dark' || (!('mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])


  useEffect(() => {
    if (localStorage.language === 'english' || (!('language' in localStorage) && window.matchMedia('(prefers-language: english)').matches)) {
      document.documentElement.classList.add('english')
      
    } else {
      document.documentElement.classList.remove('english')
    }
  }, [])

  const handleMode = () => {
    setMode((initialmode) => initialmode === "light" ? "dark" : "light");
    if (mode === "dark") {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("mode","light")
    }
    else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("mode","dark")
    }
  }

  const handleLanguage = () => {
    setLanguage((initialLanguage) => initialLanguage === "english" ? "türkçe" : "english");
    if (language === "english") {
      document.documentElement.classList.add("english")
      localStorage.setItem("language","türkçe")
    }
    else {
      document.documentElement.classList.remove("english")
      localStorage.setItem("language","english")
    }
  }

  const scrollToRefSkill = useRef();

  const scrollToRefProjects = useRef();

  const scrollToRefHireMe = useRef();

  const handleScroll =  (ref) => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }



  return (
    <ModeContext.Provider value={{ mode, handleMode }}>
      <LanguageContext.Provider value={{ language, handleLanguage }}>
        <div className="bg-[#FFFFFF] dark:bg-[#252128] h-auto" id={mode}>

          <Header handleScroll={handleScroll} scrollToRefSkill={scrollToRefSkill} scrollToRefProjects={scrollToRefProjects} scrollToRefHireMe={scrollToRefHireMe} />
          <Info />
          <Skills scrollToRefSkill={scrollToRefSkill} />
          <Profile />
          <Projects scrollToRefProjects={scrollToRefProjects}/>
          <Footer scrollToRefHireMe={scrollToRefHireMe} />
        </div>
      </LanguageContext.Provider>
    </ModeContext.Provider>
  );
}

export default App;
