import React, {useState} from 'react';
import { satisfactionOptions, calcSettings, CURRENCY, DEFAULT_SATISFACTION } from '../../config';
import { isUserInputValid, getTipAmount, createResult } from '../../utils';
import t from '../../translations';
import styles from './TipCalculator.module.scss';

import {TBill, TConsumers, TSatisfaction, IState, IUserInputUpdate} from '../../types';
import {Button, ConsumersSelector, BillInput, SatisfactionSelector, Result} from '../';

const TipCalculator: React.FC = () => {
  const [state, setState] = useState<IState>({
    userInput: {
      bill: 0,
      consumers: 1,
      tipPercent: DEFAULT_SATISFACTION,
    },
    result: null,
    highlightMissing: false,
  });

  const changeUserInput = (commit: IUserInputUpdate) => {
    const userInput = {...state.userInput, ...commit};
    
    const result = !isUserInputValid(userInput) ? null : createResult(
      userInput.bill,
      userInput.consumers,
      getTipAmount(userInput, calcSettings),
      CURRENCY,
    );

    const highlightMissing = !result;

    setState({...state, userInput, result, highlightMissing})
  }

  const submit = () => {
    setState({...state, ...{highlightMissing: true}});
  }

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{t.title}</h1>

      <form onSubmit={(ev) => {ev.preventDefault(); submit();}}>
        <div className={styles.layout}>
          <div className={styles.main}>
            <h3 className={styles.subheading}>{t.bill}</h3>
            <BillInput
              value={state.userInput.bill}
              updateValueCb={(updatedValue: TBill) => {
                changeUserInput({bill: updatedValue})
              }}
              highlightMissing={state.highlightMissing}
            />

            <h3 className={styles.subheading}>{t.satisfaction}</h3>
            <SatisfactionSelector
              value={state.userInput.tipPercent}
              satisfactionOptions={satisfactionOptions}
              updateValueCb={(updatedValue: TSatisfaction) => {
                changeUserInput({tipPercent: updatedValue})
              }}
            />

            <h3 className={styles.subheading}>{t.consumers}</h3>
            <ConsumersSelector
              value={state.userInput.consumers}
              updateValueCb={(updatedValue: TConsumers) => {
                changeUserInput({consumers: updatedValue})
              }}
            />
          </div>

          <div className={styles.result}>
            {!state.result && <Button type='submit'>{t.submit}</Button>}

            {state.result && (
              <Result {...state.result} />
            )}
          </div>
        </div>

      </form>
    </div>
  );
}

export default TipCalculator
