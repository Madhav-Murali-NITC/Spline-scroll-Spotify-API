import React from "react";
import { motion } from "framer-motion"; 
import styles from "./Desktop.module.css";

const pathVariants={
    hidden:{
        opacity:0,
        pathLength:0
    },
    visible:{
        opacity:1,
        pathLength:1,
        transition:
        {
            duration:2,
            ease:"easeOut",
            delay:1
        }
    }
}

export default function ScribbleSVG1()
{

    return (
    <svg className={styles.desktop1Child} width="414" height="452" viewBox="0 0 414 452" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        d="M1.50001 381.5C-1.16665 438.167 26.5 513.3 158.5 360.5C323.5 169.5 380.5 139.5 269.5 92.5C158.5 45.5 361 2 413.5 0.5" stroke="white"/>
    </svg>
    );
} 