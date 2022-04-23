import styles from '../../App.module.css'

import poweredImage from '../../assets/powered.png';

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <img src={poweredImage} alt="header image" width={150} />
      </div>
    </header>
  );
};

export default Header;