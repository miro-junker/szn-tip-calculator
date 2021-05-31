import React from 'react';
import { TBill } from '../../types';
import t from '../../translations';
import styles from './BillInput.module.scss';

interface IBillInput {
  value: TBill;
  updateValueCb: (updatedValue: TBill) => void;
  highlightMissing: boolean;
}

const BillInput: React.FC<IBillInput> = (props) => {
  const invalidInput = props.highlightMissing;

  return (
    <div>
      <input
        className={invalidInput ? styles.error : ''}
        type='number'
        min='0'
        value={props.value}
        onChange={(ev) => {
          props.updateValueCb(Number(ev.target.value))
        }}
      />

      <div className={`${styles.hint} ${invalidInput ? styles.visible : ''}`}>
        {t.invalidBillInput}
      </div>
      
    </div>
  )
}

export default BillInput
