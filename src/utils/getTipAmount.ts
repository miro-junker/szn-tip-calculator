import { IValidUserInput, ICalcSettings } from '../types/TipCalculator'
import { ceilNumber } from '.' 

const getTipAmount = (input: IValidUserInput, settings: ICalcSettings) => {
  // Calculate user-selected tip
  const baseTip = (input.tipPercent / 100) * input.bill;

  // Calculate additional tip for every extra person 
  const extraPersonsTip = (input.consumers - 1) * settings.ADDITIONAL_PERSON_TIP;

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
