import styles from "./Desktop.module.css";
import Spline from "@splinetool/react-spline";

const Desktop = () => {
  return (
    <div className={styles.desktop1}>
      <audio src = 'Lucki.mp3' autoPlay loop />
      <img
        className={styles.v602Nunoon33Rippednotes1Icon}
        alt=""
        src="/v602nunoon33rippednotes-1@2x.png"
      />
      <div className={styles.rectangleIcon}>
      <Spline scene="https://prod.spline.design/7d62JuMMdrD0x-QZ/scene.splinecode" />
      </div>
      
      <div className={styles.visual}>Visual</div>
      <div className={styles.audio}>Audio</div>
      <img className={styles.desktop1Child} alt="" src="/vector-1.svg" />
      <img className={styles.desktop1Item} alt="" src="/vector-2.svg" />
      <div className={styles.desktop1Inner} />
      <div className={styles.rectangleDiv} />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.div}>*</div>
      <a href="https://www.youtube.com/"><div className={styles.contact}>contact</div></a>
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

export default Desktop;
