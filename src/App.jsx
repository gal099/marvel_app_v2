import { HeroesGrid } from './HeroesGrid';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Heroes</h1>
      </header>
      <main>
        <HeroesGrid />
      </main>
    </div>
  );
}

export default App;
