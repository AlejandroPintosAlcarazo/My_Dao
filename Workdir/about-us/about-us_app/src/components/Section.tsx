import styles from '../styles/Section.module.css';

type SectionProps = {
  title: string;
  content: string;
};

const Section = ({ title, content }: SectionProps) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Section;
