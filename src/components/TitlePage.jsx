import styles from './TitlePage.module.css';

export function TitlePage(props) {
  return <h1 className={styles.title}>{props.text}</h1>;
}
