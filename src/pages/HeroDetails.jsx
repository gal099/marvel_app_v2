import hero from '../components/heroDetails.json';
import styles from './HeroDetails.module.css';
import { TitlePage } from '../components/TitlePage';

export function HeroDetails() {
  const imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  console.log(hero);
  return (
    <>
      <TitlePage text={'Detalle del Heroe'} />
      <div className={styles.detailsContainer}>
        <img
          className={`${styles.col} ${styles.heroImage}`}
          src={imageUrl}
          alt={hero.name}
        />
        <div className={`${styles.col} ${styles.heroDetails}`}>
          <p className={styles.firstLine}>
            <strong>Nombre:</strong> {hero.name}{' '}
          </p>
          <p>
            <strong>Descrpción:</strong> {hero.description}
          </p>
        </div>
      </div>
    </>
  );
}
