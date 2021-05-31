import { IValidUserInput, TCalcSettings } from '../types'
import { ceilNumber } from '.' 

const getTipAmount = (input: IValidUserInput, settings: TCalcSettings): number => {
  // Calculate user-selected tip
  const baseTip = (input.tipPercent / 100) * input.bill;

  // Calculate minimal additional tip for every extra person 
  const extraPersonsTip = (input.consumers - 1) *
    settings.ADDITIONAL_PERSON_MIN_TIP;

  const precisePayout = input.bill + baseTip + extraPersonsTip;
  
  // Calculate total price per consumer and round it
  const consumerPrice = ceilNumber(
    (precisePayout / input.consumers),
    settings.ROUND_PRECISION
  );

  const totalPrice = consumerPrice * input.consumers;

  return totalPrice - input.bill;
}

export default getTipAmount
