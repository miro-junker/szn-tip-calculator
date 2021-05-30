import React from 'react'
import { IResult } from '../types/TipCalculator';
import { getPriceWithCurrency } from '../utils';
import t from '../translations';


const Result: React.FC<IResult> = (props) => {
  const totalPrice = props.bill + props.tip;

  return (
    <div>
      <p>{`${t.recommendedTip}: ${getPriceWithCurrency(props.tip, props.currency)}`}</p>
      <h2>{`${t.totalPrice}: ${getPriceWithCurrency(totalPrice, props.currency)}`}</h2>
    </div>
  )
}

export default Result
