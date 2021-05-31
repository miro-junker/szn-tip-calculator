import React from 'react'
import { IResult } from '../types/Result';
import t from '../translations';

const Result: React.FC<IResult> = ({
  consumerPrice,
  overpayRatio,
  tip,
  totalPrice,
}) => {
  const overpayPercent = Math.round((overpayRatio - 1) * 100);

  return (
    <div>
      <p>{`${t.tip}: ${tip} (+ ${overpayPercent} %)`}</p>
      <h2>{`${t.totalPrice}: ${totalPrice}`}</h2>
      <p>{`${t.consumerPrice}: ${consumerPrice}`}</p>
    </div>
  )
}

export default Result
