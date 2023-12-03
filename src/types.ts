export type CurrencyData = {
  ask: string;
  bid: string;
  currency: string;
};

export interface SupportedCurrency {
  code: string;
  features: string[];
  formatting: Formatting;
  image: string;
  name: string;
  shortName: string;
  status: string;
  type: string;
}

export interface Formatting {
  decimal: string;
  format: string;
  grouping: string;
  precision: number;
}
