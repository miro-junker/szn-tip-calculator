import React from 'react';
import { TConsumers } from '../../types';
import { Button } from '../';
import styles from './ConsumersSelector.module.scss';

interface IConsumersSelector {
  value: TConsumers;
  updateValueCb: (updatedValue: TConsumers) => void;
}

const ConsumersSelector: React.FC<IConsumersSelector> = (props) => {
  return (
    <div className={styles.root}>
      <Button
        disabled={props.value <= 1}
        onClick={(ev) => {
          ev.preventDefault();
          props.updateValueCb(props.value - 1)
        }}
      >
        -
      </Button>

      <span className={styles.value}>
        {props.value}
      </span>

      <Button
        onClick={(ev) => {
          ev.preventDefault();
          props.updateValueCb(props.value + 1)
        }}
      >
        +
      </Button>
    </div>
  )
}

export default ConsumersSelector
