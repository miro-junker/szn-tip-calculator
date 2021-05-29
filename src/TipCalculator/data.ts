import t from './translations';

interface TSatisfactionOption {
  value: number;
  label: string;
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
