import React, {useState} from 'react';
import styles from './TipCalculator.module.scss';
import { satisfactionOptions } from './data'
import t from './translations'

interface IUpdateCommit {
  bill?: number;
}

const TipCalculator: React.FC = () => {
  const [state, setState] = useState({
    bill: 0,
    validInput: false,
  });

  const updateState = (change: IUpdateCommit) => {
    setState({...state, ...change })
  }

  return (
    <div className={styles.root}>
      <h1>{t.title}</h1>

      <form>
        <fieldset>
          <h3>{t.bill}</h3>
          <input type='number' value={state.bill} onChange={(ev) => {
            updateState({bill: Number(ev.target.value)})
          }} />

          <h3>{t.satisfaction}</h3>

          {satisfactionOptions.map((option) => (
            <div key={option.value}>
              <input
                type='radio'
                name='satisfaction'
                value={option.value}
                id={`option-${option.value}`}
              />
              <label htmlFor={`option-${option.value}`}>{option.label}</label>
            </div>
          ))}

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
