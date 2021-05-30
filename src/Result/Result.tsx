import React from 'react'
import { IResult } from '../types/TipCalculator';


const Result: React.FC<IResult> = (props) => (
  <div>
    <p>Recommended tip: {props.tip}</p>
    <h2>Total price: {props.bill + props.tip}</h2>
  </div>
)

export default Result
