import { HeroCard } from './HeroCard';
import heroes from './heroes.json';
import styles from './HeroesGrid.module.css';

const hero = heroes.data.results;

export function HeroesGrid() {
  return (
    <>
      <header>
        <h1 className={styles.title}>Heroes</h1>
      </header>
      <ul className={styles.heroesGrid}>
        {hero.map((elem) => (
          <HeroCard key={elem.id} hero={elem} />
        ))}
      </ul>
    </>
  );
}
