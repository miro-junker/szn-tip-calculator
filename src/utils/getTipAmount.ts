import { IValidUserInput, ICalcSettings } from '../types/TipCalculator'
import { ceilNumber } from '.' 

const getTipAmount = (input: IValidUserInput, settings: ICalcSettings) => {
  // Calculate user-selected tip
  const baseTip = (input.tipPercent / 100) * input.bill;

  // Calculate additional tip for every extra person 
  const extraPersonsTip = (input.consumers - 1) * settings.ADDITIONAL_PERSON_TIP;

  const precisePayout = input.bill + baseTip + extraPersonsTip;

  // Round-up result
  const roundedPayout = ceilNumber(precisePayout, settings.ROUND_PRECISION);

  return roundedPayout - input.bill;
}

export default getTipAmount
