import React from 'react';
import { TSatisfaction, TSatisfactionOption } from '../../types';

interface ISatisfactionSelector {
  value: TSatisfaction | null;
  satisfactionOptions:  TSatisfactionOption[];
  updateValueCb: (updatedValue: TSatisfaction) => void;
}

const SatisfactionSelector: React.FC<ISatisfactionSelector> = (props) => {
  return (
    <div>
      {props.satisfactionOptions.map((option) => (
        <div key={option.value}>
          <input
            type='radio'
            name='satisfaction'
            value={option.value}
            id={`option-${option.value}`}
            checked={props.value === option.value}
            onChange={(ev) => {
              props.updateValueCb(Number(ev.target.value))
            }}
          />

          <label htmlFor={`option-${option.value}`}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  )
}

export default SatisfactionSelector
