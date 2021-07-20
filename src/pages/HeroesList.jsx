import { HeroesGrid } from '../components/HeroesGrid';
import { TitlePage } from '../components/TitlePage';

export function HeroesList() {
  return (
    <>
      <TitlePage text={'Lista de Heroes'} />
      <HeroesGrid />
    </>
  );
}
