interface TSatisfactionOption {
  name: string;
  label: string;
  value: number;
}

export const satisfactionOptions: TSatisfactionOption[] = [
  {
    'name': 'low',
    'label': 'Bad',
    'value': 2,
  },
  {
    'name': 'mid',
    'label': 'Good',
    'value': 10,
  },
  {
    'name': 'high',
    'label': "Perfect, I'm very pleased",
    'value': 15,
  },
];
