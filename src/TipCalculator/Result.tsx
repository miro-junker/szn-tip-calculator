import React from 'react'

interface IResult {
  tip: number;
  totalPrice: number;
}

const Result: React.FC<IResult> = (props) => (
  <div>
    <p>Recommended tip: {props.tip}</p>
    <h2>Total price: {props.totalPrice}</h2>
  </div>
)

export default Result
