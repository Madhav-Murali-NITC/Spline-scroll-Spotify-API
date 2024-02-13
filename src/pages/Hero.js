import styles from "./Desktop.module.css";
import Spline from "@splinetool/react-spline";
import React from "react";
import {useState,useEffect} from "react";
import ScribbleSVG1 from "./ScribbleSVG1";
import ScribbleSVG2 from "./ScribbleSVG2";

const Desktop = () => {
  
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    console.log(isPlaying)
    setIsPlaying(!isPlaying);
  };

  return (
    <div className = 'container'>
        <div className={styles.hero}>
            <ScribbleSVG1 />
            <ScribbleSVG2 />

            <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
                <div className={styles.groupInner} />
            </div>

            <div className={styles.audio}><h1 className={styles.audioText}>Audio</h1></div>
            <div className={styles.visual}><h1 className={styles.visualText}>Visual</h1></div>


            <div className={styles.desktop1Inner} />
            <div className={styles.rectangleDiv} />
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" /> 
            <a href="https://www.youtube.com/"><div className={styles.contact}><p>contact</p></div></a>
            <div className={styles.text}>{` `}</div>
            <div className={styles.text1}>{` `}</div>

        </div>
    </div>
  );
};

export default Desktop;
