import { IUserInput, IValidUserInput } from '../types';

export const isBillValid = (bill: number) => {
  return bill > 0;
}

export const isSatisfactionValid = (satisfaction: number | null) => {
  return satisfaction !== null;
}

export const isConsumersValid = (consumers: number) => {
  return Number.isInteger(consumers) && consumers >= 1;
}

const isUserInputValid = (input: IUserInput): input is IValidUserInput => {
  return (
    isBillValid(input.bill) &&
    isSatisfactionValid(input.tipPercent) &&
    isConsumersValid(input.consumers)
  )
}

export default isUserInputValid
