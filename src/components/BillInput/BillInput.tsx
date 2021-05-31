import React from 'react';
import { TBill } from '../../types'

interface IBillInput {
  value: TBill;
  updateValueCb: (updatedValue: TBill) => void;
}

const BillInput: React.FC<IBillInput> = (props) => {
  return (
    <div>
      <input
        type='number'
        min='0'
        value={props.value}
        onChange={(ev) => {
          props.updateValueCb(Number(ev.target.value))
        }}
      />
    </div>
  )
}

export default BillInput
