import {FC} from 'react';

export const FnEmailValidator = (
  emailText: string,
  onSuccess: (value: boolean) => void,
) => {
  // TODO: Find Suitable Validator - Potentionaly react-native-form-validator
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(emailText) === false) {
    onSuccess(false);
  } else {
    onSuccess(true);
    // setUserToken();
  }
};

export const FnPasswordCheck = (
  passwordText: string,
  emailValid: boolean,
  onSuccess: (value: boolean) => void,
) => {
  //Will call back end to check password matches
  if (emailValid) {
    if (passwordText === 'test') {
      onSuccess(true);
      console.log(passwordText === 'test', 'testing password fn');
    } else {
      onSuccess(false);
    }
  } else {
    onSuccess(true);
  }
};
