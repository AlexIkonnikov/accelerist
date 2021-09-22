import { stringify, parse, ParsedQuery } from 'query-string';

export const getQueryParams = (): ParsedQuery<string | number> => {
  return parse(location.search, {parseNumbers: true});
}

export const getQueryString = (): string => {
  const query = getQueryParams();
  return stringify(query);
};

export const isQueryParamsExist = (): boolean => {
  if (location.search) {
    return true;
  }
  return false;
};

export const setQueryParams = (params: string): void => {
  history.replaceState(location.search, '', '?' + params);
};

export const mergeParams = (params: Record<string, number |string | Array<string> | Array<number>>): string => {
  const existQueryParams = getQueryParams();
  const newQueryString = stringify({...existQueryParams, ...params});
  return newQueryString;
}

export const createInitParams = (initParams: ParsedQuery<string|number>): typeof initParams => {
  if (isQueryParamsExist()) {
    return getQueryParams();
  }
  return initParams;
}
