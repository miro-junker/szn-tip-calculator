import React from 'react';
import styles from './TipCalculator.module.scss';
import { satisfactionOptions } from './data'


const TipCalculator: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>TipCalculator</h1>

      <fieldset>
        <h3>Bill value</h3>
        <input type="number" />

        <h3>Staff quality</h3>

        {satisfactionOptions.map((option) => {
          return (
            <div key={option.name}>
              <input type="radio" name="satisfaction" id={option.name} />
              <label htmlFor={option.name}>{option.label}</label>
            </div>
          );
        })}

        <h3>People involved</h3>
        <input type="number" />
      </fieldset>

      <button>Calculate</button>
    </div>
  );
}

export default TipCalculator
