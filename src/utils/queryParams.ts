import { stringify, parse, ParsedQuery } from 'query-string';

export const getQueryParams = (): ParsedQuery<string> => {
  return parse(location.search);
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

export const createInitParams = (initParams: Record<string, number |string | Array<string> | Array<number>>): string => {
  if (isQueryParamsExist()) {
    return getQueryString();
  }
  return stringify(initParams);
}
