import { HeroCard } from './HeroCard';
import heroes from './heroes.json';

const hero = heroes.data.results;

export function HeroesGrid() {
  return (
    <ul>
      {hero.map((elem) => (
        <HeroCard key={elem.id} hero={elem} />
      ))}
    </ul>
  );
}
