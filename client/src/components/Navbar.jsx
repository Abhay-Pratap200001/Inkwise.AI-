import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
const navigate = useNavigate()

  return (
    <div className="flex justify-between items-center py-4 mx-8 sm:mx-20 xl:mx-32">
      <img onClick={()=>{navigate('/')}}
      src="https://w7.pngwing.com/pngs/130/791/png-transparent-parrot-bird-colored-parrot-flying-ink-color-splash-animals.png"
      alt="logo"
      className="w-10 sm:w-15"/>
      <span className="text-[23px] pr-10 sm:pr-200 text-4xl font-bold mt-2"> Inkwise.AI</span>
      <button onClick={()=>{
        navigate('/admin')
      }} className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5">
        Login
        <FaLongArrowAltRight className="w-3" />
      </button>
    </div>
  );
}

export default Navbar;
