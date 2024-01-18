import React from 'react'
import style from "./foot.module.css"

function Footer() {
  return (
    <div className=' h-[30vh] snap-center'>
      <div className={style.container}>
        <div className={style.sumup}>

        </div>
        <div className={style.credit}>
            Website by - @Xoumya_
        </div>
      </div>
    </div>
  )
}

export default Footer
