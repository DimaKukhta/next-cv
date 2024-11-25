import styles from "./styles.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
  containerClassName?: string;
};

const SectionWrapper: React.FC<Props> = ({
  title,
  children,
  containerClassName = "",
  ...props
}) => {
  return (
    <div className={`${styles.container} ${containerClassName}`} {...props}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default SectionWrapper;
