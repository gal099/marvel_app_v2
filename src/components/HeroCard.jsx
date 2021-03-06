import { Link } from 'react-router-dom';
import styles from './HeroCard.module.css';

export function HeroCard(props) {
  const imageUrl = `${props.hero.thumbnail.path}.${props.hero.thumbnail.extension}`;

  return (
    <li className={styles.heroCard}>
      <Link to={`/hero/${props.hero.id}`}>
        <img
          width={333}
          height={333}
          className={styles.heroImage}
          src={imageUrl}
          alt={props.hero.name}
        />
        <div>{props.hero.name}</div>
      </Link>
    </li>
  );
}
