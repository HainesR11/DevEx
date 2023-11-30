import axios from 'axios';
import {useQuery, UseQueryOptions} from '@tanstack/react-query';

const fetchPosts = async () => {
  try {
    const {data} = await axios.get(`http://localhost:4000/api/posts`);
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
