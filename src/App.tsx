import React from 'react';
import { Nav } from './components/nav';
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>
        <Nav />
      </header>
    </div>
  );
}

export default App;
