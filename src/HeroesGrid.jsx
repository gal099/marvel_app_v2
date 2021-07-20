import { HeroCard } from './HeroCard';
import heroes from './heroes.json';

export function HeroesGrid() {
  return (
    <ul>
      {heroes.data.results.map((elem) => (
        <HeroCard key={elem.id} name={elem.name} />
      ))}
    </ul>
  );
}
