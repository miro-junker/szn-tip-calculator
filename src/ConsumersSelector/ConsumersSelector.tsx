import React from 'react';
import styles from './ConsumersSelector.module.scss';

interface IConsumersSelector {
  value: number;
  updateValueCb: (updatedValue: number) => void;
}

const ConsumersSelector: React.FC<IConsumersSelector> = ({
  value,
  updateValueCb
}) => {
  return (
    <div className={styles.root}>
      <button
        disabled={value <= 1}
        onClick={(ev) => {
          ev.preventDefault();
          updateValueCb(value - 1)
        }}
      >
        -
      </button>

      <span className={styles.value}>
        {value}
      </span>

      <button
        onClick={(ev) => {
          ev.preventDefault();
          updateValueCb(value + 1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default ConsumersSelector
