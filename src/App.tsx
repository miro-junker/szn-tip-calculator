import React from 'react';
import { TipCalculator } from './components';
import styles from './App.module.scss';

function App() {
  return (
    <div className={`App ${styles.root}`}>
      <TipCalculator />
    </div>
  );
}

export default App;
