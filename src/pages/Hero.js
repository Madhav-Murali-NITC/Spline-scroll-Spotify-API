import styles from "./Desktop.module.css";
import Spline from "@splinetool/react-spline";
import React from "react";
import {useState,useEffect} from "react";
import ScribbleSVG1 from "./ScribbleSVG1";
import ScribbleSVG2 from "./ScribbleSVG2";
import Navbar from "./Navbar";
import { TimelineMax } from 'gsap';
import { useGsapController, ScrollTrigger } from 'gsap-react-plugin';
import { useRef } from 'react';






const Desktop = () => {







  return (
    <div className = 'container'>
      <Navbar />
        <div className={styles.desktop1}>
        
        <img
            className={styles.v602Nunoon33Rippednotes1Icon}
            alt=""
            src="/v602nunoon33rippednotes-1@2x.png"
        />

       
         
          <div  className={styles.rectangleIcon}>
            <Spline scene="https://prod.spline.design/7d62JuMMdrD0x-QZ/scene.splinecode" />
          </div>
      
      
        
        <div  className={styles.visual}>Visual</div>
        <div className={styles.audio}>Audio</div>
        <ScribbleSVG1 />
        <ScribbleSVG2 />
        <div className={styles.desktop1Inner} />
        <div className={styles.rectangleDiv} />
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <div className={styles.div}>*</div>
        <a href="https://www.youtube.com/"><div className={styles.contact}><p>contact</p></div></a>
        <div className={styles.text}>{` `}</div>
        <div className={styles.text1}>{` `}</div>
        <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.groupInner} />
        </div>  
        </div>
    </div>
  );
};

export default Desktop;
