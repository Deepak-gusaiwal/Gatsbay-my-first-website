import React from 'react'
import {footer} from '../components/style.module.css'

const Footer = () => {
  return (
        <div className={footer}>
            {new Date().getFullYear()} All @copyrights reserved by Deepak
        </div>
  )
}

export default Footer