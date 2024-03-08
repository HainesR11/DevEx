import axios from 'axios';
import env from 'react-native-config';
import {useQuery, UseQueryOptions} from '@tanstack/react-query';

const fetchPosts = async () => {
  try {
    const {data} = await axios.get(`${env.NODE_SERVICE_URL}/api/posts`);
    return data.data;
  } catch (e) {
    console.log('---error---', e);
  }
};

export const useGetPosts = <TData = any, TError = unknown>(
  options?: Omit<UseQueryOptions<any, TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<any, TError, TData>['queryKey'];
  },
) => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
    ...options,
  });
};
