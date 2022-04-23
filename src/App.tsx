import Container from './components/Container';
import Header from './components/Header';
import styles from './App.module.css';

function App() { 
  return (
    <div className={styles.main}>
      <Header />
      <Container />
    </div>
  );
}

export default App;
