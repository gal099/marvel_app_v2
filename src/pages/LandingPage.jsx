import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

export function LandingPage() {
  return (
    <div className={styles.bkg_img}>
      <div>
        <Link to="/list">
          <h1 className={styles.title}>Heroes de MARVEL</h1>
        </Link>
      </div>
    </div>
  );
}
