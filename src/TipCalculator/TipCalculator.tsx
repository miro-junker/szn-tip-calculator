import React from 'react';
import styles from './TipCalculator.module.scss';
import { satisfactionOptions } from './data'
import t from './translations'

const TipCalculator: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>{t.title}</h1>

      <form>
        <fieldset>
          <h3>{t.bill}</h3>
          <input type='number' />

          <h3>{t.satisfaction}</h3>

          {satisfactionOptions.map((option) => {
            return (
              <div key={option.name}>
                <input type='radio' name='satisfaction' id={option.name} />
                <label htmlFor={option.name}>{option.label}</label>
              </div>
            );
          })}

          <h3>{t.peopleCount}</h3>
          <input type='number' />
        </fieldset>

        <button type='submit'>
          {t.submit}
        </button>
      </form>
    </div>
  );
}

export default TipCalculator
