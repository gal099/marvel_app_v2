import { useEffect, useState } from 'react';
import { HeroCard } from './HeroCard';
import styles from './HeroesGrid.module.css';

export function HeroesGrid() {
  const [hero, setHeroes] = useState([]);

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=e7d57fb50cf5c7cd3da6c4bab80a741e&hash=9bae1d7bc80738cf67190f0d44a60163&ts=1626185133165`
    )
      .then((result) => result.json())
      .then((data) => setHeroes(data.data.results));
  }, []);

  return (
    <>
      <ul className={styles.heroesGrid}>
        {hero.map((elem) => (
          <HeroCard key={elem.id} hero={elem} />
        ))}
      </ul>
    </>
  );
}
