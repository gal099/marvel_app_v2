import hero from '../components/heroDetails.json';
import styles from './HeroDetails.module.css';
import { TitlePage } from '../components/TitlePage';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export function HeroDetails() {
  const { heroId } = useParams();
  const [heroe, setHeroe] = useState(null);
  console.log('cargando al ', heroId);

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters/${heroId}?apikey=e7d57fb50cf5c7cd3da6c4bab80a741e&hash=9bae1d7bc80738cf67190f0d44a60163&ts=1626185133165`
    )
      .then((result) => result.json())
      .then((data) => setHeroe(data.data.results[0]));
  }, [heroId]);

  console.log(heroe);

  if (!heroe) {
    return null;
  }

  const imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;

  return (
    <>
      <TitlePage text={'Detalle del Héroe'} />
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
