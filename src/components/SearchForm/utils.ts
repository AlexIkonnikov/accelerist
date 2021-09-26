import { IFilters } from '../../store/savedList/types';

export interface ISearchFormFields {
  q?: string;
  revenue?: Array<number>;
  gender?: string[];
  relations?: string[];
  income?: Array<{ value: string; label: string }>;
}

export const getFormatValuesToApi = (values: ISearchFormFields) => {
  const { revenue, ...outerProps } = values;
  return {
    ...outerProps,
    income: values.income && values.income.map((item) => item.value),
    revenueMin: values.revenue && values.revenue[0],
    revenueMax: values.revenue && values.revenue[1],
  };
};

export const getInitialValueToForm = (values: IFilters) => {
  return {
    ...values,
    income:
      values.income &&
      values.income.map((item) => {
        return { value: item, label: item };
      }),
    revenue:
      values.revenueMin && values.revenueMax ? [values.revenueMin ?? 1, values.revenueMax ?? 100000000] : undefined,
  };
};
