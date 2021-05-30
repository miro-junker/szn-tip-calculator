import t from './translations';
import { TSatisfactionOption } from './types/TipCalculator'

export const ADDITIONAL_PERSON_TIP = 10;
export const ROUND_PRECISION = 10;

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
