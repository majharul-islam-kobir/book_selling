
import { useState } from 'react'
import { useEffect } from 'react';
import { MdLightMode } from 'react-icons/md';
 
function DarkMode() {

const [theme , setTheme] = useState (
    (localStorage.getItem("theme")? localStorage.getItem("theme") : "light")
) 

const element = document.documentElement; 

useEffect ( () => {
    if (theme === "dark"){
        element.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }else{
        element.classList.remove("dark");
        localStorage.setItem("theme" , "light");
    }
},[theme]);

 const changeTheme  = () => {
    if (theme === "light"){
        setTheme("dark")
    }else{
        setTheme("light")
    }
 }
  return (
    <div className=' relative cursor-pointer'>
        <MdLightMode className={`w-[70px] mt-4 z-10 text-white text-2xl  absolute bottom-[2px] ${theme === 'dark' ? "opacity-100" : "opacity-0"}`}  onClick={changeTheme }/>
        <MdLightMode className={`w-[70px] mt-4 z-10 text-2xl`}  onClick={changeTheme }/>
      

    </div>
  )
}

export default DarkMode