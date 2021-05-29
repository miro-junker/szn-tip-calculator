import React, {useState} from 'react';
import styles from './TipCalculator.module.scss';
import { satisfactionOptions } from './data'
import t from './translations'
import Result from './Result'

interface IState {
  bill: number;
  peopleCount: number;
  satisfaction: number;
  validInput: boolean;
  calculatedTip: number | null;
}
interface IUserInputUpdate {
  bill?: number;
  peopleCount?: number;
  satisfaction?: number;
}

const DEFAULT_SATISFACTION = 10;

const TipCalculator: React.FC = () => {
  const [state, setState] = useState<IState>({
    bill: 0,
    peopleCount: 1,
    satisfaction: DEFAULT_SATISFACTION,
    validInput: false,
    calculatedTip: null,
  });

  const changeUserInput = (input: IUserInputUpdate) => {
    setState({...state, ...input})
  }

  return (
    <div className={styles.root}>
      <h1>{t.title}</h1>

      <form>
        <fieldset>
          <h3>{t.bill}</h3>
          <input type='number' value={state.bill} onChange={(ev) => {
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
                checked={state.satisfaction === option.value}
                onChange={(ev) => {
                  changeUserInput({satisfaction: Number(ev.target.value)})
                }}
              />
              <label htmlFor={`option-${option.value}`}>{option.label}</label>
            </div>
          ))}

          <h3>{t.peopleCount}</h3>
          <input type='number' value={state.peopleCount} onChange={(ev) => {
            changeUserInput({peopleCount: Number(ev.target.value)})
          }} />
        </fieldset>

        <button type='submit'>
          {t.submit}
        </button>
      </form>

      {state.calculatedTip && (<Result totalPrice={456} tip={123} />)}

    </div>
  );
}

export default TipCalculator
