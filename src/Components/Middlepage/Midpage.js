"use client"

import React from 'react'
import style from "./md.module.css"
import {data} from "./content/midcontent"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'


function Midpage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplauSpeed:2000,
  };

  return (
    <div className={style.midpage}>
      <h1 className={style.midHead}>Treks only for you...</h1>
      <div className={style.contant}>     
        <Slider {...settings} className={style.slider} >
        {data.map((item)=>(
          <div key={item.id}>
            <Image src={item.img} className={style.image} alt='mid'/>
            <div className={style.detail}>
              <h1>{item.detail}</h1>
              <label>Check out</label>
            </div>           
          </div>
        ))}
        </Slider> 
      </div>
      
    </div>
  )
}

export default Midpage
