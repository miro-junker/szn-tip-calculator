export type TBill = number;
export type TSatisfaction = number;
export type TConsumers = number;

export interface IUserInput {
  bill: TBill;
  consumers: TConsumers;
  tipPercent: TSatisfaction | null;
}

export interface IValidUserInput {
  bill: TBill;
  consumers: TConsumers;
  tipPercent: TSatisfaction;
}

export interface IUserInputUpdate {
  bill?: TBill;
  consumers?: TConsumers;
  tipPercent?: TSatisfaction;
}

export interface IState {
  userInput: IUserInput;
  result: IResult | null;
  highlightMissing: boolean;
}

export interface IResult {
  consumerPrice: string;
  overpayRatio: number;
  tip: string;
  totalPrice: string;
}

export type TCalcSettings = {
  ADDITIONAL_PERSON_MIN_TIP: number;
  ROUND_PRECISION: number;
}

export type TSatisfactionOption = {
  value: TSatisfaction;
  label: string;
}
