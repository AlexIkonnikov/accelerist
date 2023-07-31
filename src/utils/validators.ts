export const composeValidators =
  (...validators: Array<(value: string) => undefined | any>) =>
  (value: string) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

export const requireField = (value: string): undefined | string => {
  return value ? undefined : 'Field is require'
};

export const mailValidator = (value: string): undefined | string => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isMatched = reg.test(String(value).toLowerCase());
  return isMatched ? undefined : 'Incorrect email format';
};

export const confirm = (_value: string, allValues: Record<string, any>): undefined | string => {
  if (allValues.password !== allValues.confirmPassword) {
    return 'Password mismatch';
  }
  return undefined;
};

