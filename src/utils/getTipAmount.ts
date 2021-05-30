import { IUserInput } from '../types/TipCalculator'
import { ceilNumber } from '.' 
import { ADDITIONAL_PERSON_TIP, ROUND_PRECISION } from '../config'

const getTipAmount = (input: IUserInput) => {
  if (!input.tipPercent) {
    return null;
  }

  // Calculate user-selected tip
  const baseTip = (input.tipPercent / 100) * input.bill;

  // Calculate additional tip for every extra person 
  const extraPersonsTip = (input.peopleCount - 1) * ADDITIONAL_PERSON_TIP;

  const precisePayout = input.bill + baseTip + extraPersonsTip;

  // Round-up result
  const roundedPayout = ceilNumber(precisePayout, ROUND_PRECISION);

  return roundedPayout - input.bill;
}

export default getTipAmount
