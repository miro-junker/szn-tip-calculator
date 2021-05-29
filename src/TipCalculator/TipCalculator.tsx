import React from 'react';
import styles from './TipCalculator.module.css';

const TipCalculator: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>TipCalculator</h1>

      <fieldset>
        <h3>Bill value</h3>
        <input type="number" />

        <h3>Staff quality</h3>
        <input type="radio" name="satisfaction" id="bad" />
        <label htmlFor="bad">Bad</label>
        <input type="radio" name="satisfaction" id="good" />
        <label htmlFor="good">Good</label>
        <input type="radio" name="satisfaction" id="perfect" />
        <label htmlFor="perfect">Perfect</label>

        <h3>People involved</h3>
        <input type="number" />
      </fieldset>

      <button>Calculate</button>
    </div>
  );
}

export default TipCalculator
