import React from 'react';
import styles from './Desktop.module.css';

const Navbar = () => {
    return (
        <div>
            <a href="https://www.youtube.com/"><div className={styles.contact}><p>contact</p></div></a>
        <div className={styles.text}>{` `}</div>
        <div className={styles.text1}>{` `}</div>
        <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.groupInner} />
            
        </div>
        </div>
    );
};

export default Navbar;  