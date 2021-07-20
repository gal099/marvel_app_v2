import styles from './HeroCard.module.css';

export function HeroCard(props) {
  const imageUrl = `${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`;

  return (
    <li className={styles.heroCard}>
      <img className={styles.heroImage} src={imageUrl} alt={props.hero.name} />
      <div>{props.hero.name}</div>
    </li>
  );
}
