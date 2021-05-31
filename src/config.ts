import t from './translations';
import { TSatisfactionOption, TCalcSettings } from './types'

export const CURRENCY = 'CZK';

export const calcSettings: TCalcSettings = {
  ADDITIONAL_PERSON_MIN_TIP: 2,
  ROUND_PRECISION: 10,
}

export const satisfactionOptions: TSatisfactionOption[] = [
  {
    'value': 2,
    'label': t.option[2],
  },
  {
    'value': 10,
    'label': t.option[10],
  },
  {
    'value': 15,
    'label': t.option[15],
  },
];
