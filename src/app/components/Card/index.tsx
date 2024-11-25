import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  title: string;
  image: string;
};

const Card: React.FC<Props> = ({ title, image, ...props }: Props) => {
  return (
    <div className={`${styles.container}`} {...props}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} width={100} height={200} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Card;
