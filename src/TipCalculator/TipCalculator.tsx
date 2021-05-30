import React, {useState} from 'react';
import { IState, IUserInputUpdate } from '../types/TipCalculator';
import { isUserInputValid, getTipAmount } from '../utils';
import t from '../translations';
import { satisfactionOptions } from '../config';
import Result from '../Result/Result';
import styles from './TipCalculator.module.scss';

const TipCalculator: React.FC = () => {
  const [state, setState] = useState<IState>({
    userInput: {
      bill: 0,
      peopleCount: 1,
      tipPercent: null,
    },
    calculatedTip: null,
  });

  const changeUserInput = (commit: IUserInputUpdate) => {
    const userInput = {...state.userInput, ...commit};

    const calculatedTip = isUserInputValid(userInput)
        ? getTipAmount(userInput)
        : null;

    setState({...state, userInput, calculatedTip})
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

          <h3>{t.peopleCount}</h3>
          <input
            type='number'
            value={state.userInput.peopleCount}
            onChange={(ev) => {
              changeUserInput({peopleCount: Number(ev.target.value)})
            }}
          />
        </fieldset>

        <button type='submit'>
          {t.submit}
        </button>
      </form>

      {state.calculatedTip && (
        <Result bill={state.userInput.bill} tip={state.calculatedTip} />
      )}

    </div>
  );
}

export default TipCalculator
