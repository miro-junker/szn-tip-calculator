import { IUserInput, IValidUserInput } from '../types/TipCalculator';

const isUserInputValid = (input: IUserInput): input is IValidUserInput => {
  if (input.tipPercent === null) {
    return false;
  }

  if (input.bill < 0) {
    return false;
  }

  if (!Number.isInteger(input.peopleCount) || input.peopleCount < 1 ) {
    return false;
  }

  return true;
}

export default isUserInputValid
