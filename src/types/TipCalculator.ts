export interface IUserInput {
  bill: number;
  peopleCount: number;
  tipPercent: number | null;
}

export interface IValidUserInput {
  bill: number;
  peopleCount: number;
  tipPercent: number;
}

export interface IUserInputUpdate {
  bill?: number;
  peopleCount?: number;
  tipPercent?: number;
}

export interface IState {
  userInput: IUserInput;
  calculatedTip: number | null;
}

export interface IResult {
  bill: number;
  tip: number;
  currency: string;
}

export interface TSatisfactionOption {
  value: number;
  label: string;
}

export interface ICalcSettings {
  ADDITIONAL_PERSON_TIP: number;
  ROUND_PRECISION: number;
}
