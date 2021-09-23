import { stringify, parse, ParsedQuery } from 'query-string';

export const getQueryParams = (): ParsedQuery<string | number> => {
  return parse(location.search, {parseNumbers: true, arrayFormat: 'bracket'});
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

export const mergeWithExisting = (params: ParsedQuery<string | number>): typeof params => {
  const existQueryParams = getQueryParams();
  const newQueryString = {...existQueryParams, ...params};
  return newQueryString;
}

export const createInitParams = (initParams: ParsedQuery<string|number>): typeof initParams => {
  if (isQueryParamsExist()) {
    return getQueryParams();
  }
  return initParams;
}
