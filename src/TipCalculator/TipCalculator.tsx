import React, {useState} from 'react';
import { IState, IUserInputUpdate } from '../types/TipCalculator';
import { isUserInputValid, getTipAmount, createResult } from '../utils';
import t from '../translations';
import { satisfactionOptions, calcSettings, CURRENCY } from '../config';
import Result from '../Result/Result';
import styles from './TipCalculator.module.scss';

const TipCalculator: React.FC = () => {
  const [state, setState] = useState<IState>({
    userInput: {
      bill: 0,
      consumers: 1,
      tipPercent: null,
    },
    result: null,
  });

  const changeUserInput = (commit: IUserInputUpdate) => {
    const userInput = {...state.userInput, ...commit};

    const result = !isUserInputValid(userInput) ? null : createResult(
      userInput.bill,
      userInput.consumers,
      getTipAmount(userInput, calcSettings),
      CURRENCY,
    );

    setState({...state, userInput, result})
  }

  return (
    <div className={styles.root}>
      <h1>{t.title}</h1>

      <form>
        <fieldset>
          <h3>{t.bill}</h3>
          <input type='number' value={state.userInput.bill} onChange={(ev) => {
            changeUserInput({bill: Number(ev.target.value)})
          }} />

          <h3>{t.satisfaction}</h3>

          {satisfactionOptions.map((option) => (
            <div key={option.value}>
              <input
                type='radio'
                name='satisfaction'
                value={option.value}
                id={`option-${option.value}`}
                checked={state.userInput.tipPercent === option.value}
                onChange={(ev) => {
                  changeUserInput({tipPercent: Number(ev.target.value)})
                }}
              />
              <label htmlFor={`option-${option.value}`}>{option.label}</label>
            </div>
          ))}

          <h3>{t.consumers}</h3>
          <input
            type='number'
            value={state.userInput.consumers}
            onChange={(ev) => {
              changeUserInput({consumers: Number(ev.target.value)})
            }}
          />
        </fieldset>

        <button type='submit'>
          {t.submit}
        </button>
      </form>

      {state.result && (
        <Result {...state.result} />
      )}

    </div>
  );
}

export default TipCalculator
