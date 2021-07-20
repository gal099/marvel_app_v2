import hero from '../components/heroDetails.json';
import styles from './HeroDetails.module.css';

export function HeroDetails() {
  const imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  console.log(hero);
  return (
    <div className={styles.detailsContainer}>
      <img src={imageUrl} alt={hero.name} />
      <div>
        <p>{hero.name} </p>
        <p>{hero.description}</p>
      </div>
    </div>
  );
}
