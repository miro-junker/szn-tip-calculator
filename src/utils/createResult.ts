import { TBill, TConsumers, IResult } from '../types';
import { getPriceWithCurrency } from '.';

const createResult = (
  bill: TBill,
  consumers: TConsumers,
  tip: number,
  currency: string
): IResult => {
  const totalPrice = bill + tip;

  return {
    consumerPrice: getPriceWithCurrency((totalPrice / consumers), currency),
    tip: getPriceWithCurrency(tip, currency),
    overpayRatio: totalPrice / bill,
    totalPrice: getPriceWithCurrency(totalPrice, currency),
  }
}

export default createResult
