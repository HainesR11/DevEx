import axios, {AxiosResponse} from 'axios';
import env from 'react-native-config';
import {
  useMutation,
  // UseMutationOptions,
  // useQuery,
  // UseQueryOptions,
} from '@tanstack/react-query';

export type TokenFromLoginVairables = {
  email: string;
  password: string;
};

export type TokenFromLoginMutation = {
  typename?: 'RootMutationType';
  OAuth: string;
  user: {
    name: string;
    username: string;
    email: string;
  };
};

const fetchGetTokenFromLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response: AxiosResponse = await axios.get(
    `${env.NODE_SERVICE_URL}/api/authentication`,
    {params: {email, password}},
  );

  return response.data;
};

const useGetTokensFromLogin = () =>
  useMutation({
    mutationKey: ['primeAuthorization'],
    mutationFn: (variables: {email: string; password: string}) =>
      fetchGetTokenFromLogin(variables),
  });
export default useGetTokensFromLogin;
