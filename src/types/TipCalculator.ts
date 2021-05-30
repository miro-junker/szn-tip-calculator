import { IResult } from './Result';

export interface IUserInput {
  bill: number;
  consumers: number;
  tipPercent: number | null;
}

export interface IValidUserInput {
  bill: number;
  consumers: number;
  tipPercent: number;
}

export interface IUserInputUpdate {
  bill?: number;
  consumers?: number;
  tipPercent?: number;
}

export interface IState {
  userInput: IUserInput;
  result: IResult | null;
}

export interface TSatisfactionOption {
  value: number;
  label: string;
}

export interface ICalcSettings {
  ADDITIONAL_PERSON_TIP: number;
  ROUND_PRECISION: number;
}
