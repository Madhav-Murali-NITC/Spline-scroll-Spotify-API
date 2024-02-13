import React from "react";
import { motion } from "framer-motion";
import styles from "./Desktop.module.css";

const pathVariants={
    hidden:{
        pathLength:0
    },
    visible:{
        pathLength:1,
        transition:
        {
            duration:1.5,
            ease:"easeOut",
            delay:1
        }
    }
}


export default function ScribbleSVG2()
{
    return(
    <svg className={styles.desktop1Item} width="571" height="347" viewBox="0 0 571 347" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        d="M570.383 62.6772C542.042 16.9858 448.085 -47.8944 298.992 58.1164C112.625 190.63 323.103 148.779 205.099 302.714C87.0961 456.65 56.4548 151.394 0.265385 137.323" stroke="white"/>
    </svg>
    );
}