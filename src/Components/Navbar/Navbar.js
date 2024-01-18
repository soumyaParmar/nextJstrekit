"use client"

import Image from "next/image";
import { useState } from "react";

const Navbar = () =>{

    const [hidden,setHidden] = useState(false);

        const handleHidden=()=>{
            setHidden(!hidden);
        }
    return (
        <div className=" flex justify-between align-middle fixed w-full z-10 backdrop-blur-lg border-b-2 p-4 max-[600px]:p-2">

            <div>
                <p className="p-2 max-[600px]:p-5 text-xl text-[#5694c7] font-normal">TrekIt Himalayas</p>
            </div>
            <div className="flex max-[600px]:hidden">
                <p className="p-2">Treks</p>
                <p className="p-2">Village Tour</p>
                <p className="p-2">Camping</p>
                <p className="p-2">Gallery</p>
                <p className="p-2">Connect With Us</p>
            </div>
            <div className="hidden max-[600px]:block" onClick={handleHidden}>
                <Image  src="/menu.png" width={60} height={60} className="p-5 pr-4" alt="menu"/>
            </div>
            {hidden && <div className=" hidden max-[600px]:block bg-black bg-opacity-85 text-white fixed right-1 top-[85px] w-[50%]">
                <p className="p-4 font-extralight border-b-2">Treks</p>
                <p className="p-4 font-extralight border-b-2">Village Tour</p>
                <p className="p-4 font-extralight border-b-2">Camping</p>
                <p className="p-4 font-extralight border-b-2">Gallery</p>
                <p className="p-4 font-extralight border-b-2">Connect With Us</p>           
            </div>
            }
        </div>
    )
}

export default Navbar;