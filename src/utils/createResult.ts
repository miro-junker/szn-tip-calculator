import { IResult } from '../types/Result';
import { getPriceWithCurrency } from '.';

const createResult = (
  bill: number,
  consumers: number,
  tip: number,
  currency: string
): IResult => {
  const totalPrice = bill + tip;

  return {
    consumerPrice: getPriceWithCurrency((totalPrice / consumers), currency),
    tip: getPriceWithCurrency(tip, currency),
    totalPrice: getPriceWithCurrency(totalPrice, currency),
  }
}

export default createResult
