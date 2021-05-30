import React from 'react'
import { IResult } from '../types/Result';
import t from '../translations';

const Result: React.FC<IResult> = ({
  consumerPrice,
  tip,
  totalPrice,
}) => (
  <div>
    <p>{`${t.tip}: ${tip}`}</p>
    <h2>{`${t.totalPrice}: ${totalPrice}`}</h2>
    <p>{`${t.consumerPrice}: ${consumerPrice}`}</p>
  </div>
)

export default Result
