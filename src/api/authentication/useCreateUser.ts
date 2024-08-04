import axios from 'axios';
import env from 'react-native-config';
import {useMutation, UseMutationOptions} from '@tanstack/react-query';

type TCreateUserVariables = {
  email: string;
  password: string;
  name: string;
};

const createUser = async ({email, password, name}: TCreateUserVariables) => {
  try {
    const response = await axios.post(
      `${env.NODE_SERVICE_URL}/api/authentication`,
      {email, password, name},
      // {headers: }
    );
    return response.data;
  } catch (error) {
    console.log('----error----', error);
  }
};

const useCreateUser = <TError = unknown, TContext = unknown>(
  options?: Omit<
    UseMutationOptions<any, TError, TCreateUserVariables, TContext>,
    'mutationKey'
  > & {
    mutationKey?: UseMutationOptions<
      any,
      TError,
      TCreateUserVariables,
      TContext
    >['mutationKey'];
  },
) =>
  useMutation({
    mutationKey: ['createUser'],
    mutationFn: (variables: TCreateUserVariables) => createUser(variables),
    ...options,
  });

export default useCreateUser;
