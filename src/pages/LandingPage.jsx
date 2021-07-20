import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import { TitlePage } from '../components/TitlePage';

export function LandingPage() {
  return (
    <div className={styles.bkg_img}>
      <div>
        <Link to="/list">
          <TitlePage text={'Heroes de MARVEL'} />
        </Link>
      </div>
    </div>
  );
}
