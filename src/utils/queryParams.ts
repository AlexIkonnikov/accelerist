import { parse, ParsedQuery } from 'query-string';

const _isQueryParamsExist = (): boolean => {
  if (location.search) {
    return true;
  }
  return false;
};

export const getQueryParams = (): ParsedQuery<string | number> => {
  return parse(location.search, { parseNumbers: true, arrayFormat: 'bracket' });
};

export const mergeWithExisting = (params: ParsedQuery<string | number>): typeof params => {
  const existQueryParams = getQueryParams();
  const newQueryString = { ...existQueryParams, ...params };
  return newQueryString;
};

export const createInitParams = (initParams: ParsedQuery<string | number>): typeof initParams => {
  if (_isQueryParamsExist()) {
    return getQueryParams();
  }
  return initParams;
};
