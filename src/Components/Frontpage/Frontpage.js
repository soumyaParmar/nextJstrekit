"use client"

import React from 'react'
import style from "./front.module.css"
import Facebook from "./Assets/fb.svg"
import gmail from "./Assets/gmail.svg"
import insta from "./Assets/insta.svg"
import Image from 'next/image'

function Frontpage() {
  return (
    <div className={style.front}>
      <p className={style.para}>Discover The Art Of Nature With Us</p>
      <div className={style.connect}>
        <Image src={Facebook} alt='facbook'/>
        <Image src={insta} alt='insta'/>
        <Image src={gmail} alt='gmail'/>       
      </div>
    </div>
  )
}

export default Frontpage
