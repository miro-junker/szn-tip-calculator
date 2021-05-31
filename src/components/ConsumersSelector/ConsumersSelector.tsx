import React from 'react';
import { TConsumers } from '../../types';
import styles from './ConsumersSelector.module.scss';

interface IConsumersSelector {
  value: TConsumers;
  updateValueCb: (updatedValue: TConsumers) => void;
}

const ConsumersSelector: React.FC<IConsumersSelector> = (props) => {
  return (
    <div className={styles.root}>
      <button
        disabled={props.value <= 1}
        onClick={(ev) => {
          ev.preventDefault();
          props.updateValueCb(props.value - 1)
        }}
      >
        -
      </button>

      <span className={styles.value}>
        {props.value}
      </span>

      <button
        onClick={(ev) => {
          ev.preventDefault();
          props.updateValueCb(props.value + 1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default ConsumersSelector
