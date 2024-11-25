import Button from "../Button";
import DynamicSquare from "../DynamicSquare";
import styles from "./styles.module.css";
import { Source_Code_Pro } from "next/font/google";

const doto = Source_Code_Pro({ subsets: ["latin"] });

const Intro: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.sectionContainer} ${styles.contentSection}`}>
        <div className={styles.title}>
          Let’s build a brighter future together!
        </div>
        <div className={`${styles.subtitle} ${doto.className}`}>
          Delivering comprehensive IT solutions for your business success!
        </div>
        <div className={styles.buttonContainer}>
          <Button label="Explore My Work" />
          <Button label="Get in Touch" className={styles.contactButton} />
        </div>
      </div>
      <div className={styles.sectionContainer}>
        <DynamicSquare />
      </div>
      <div className={`${styles.teamName} ${doto.className}`}>DK_Studio</div>
    </div>
  );
};

export default Intro;
