import axios, {AxiosResponse} from 'axios';
import env from 'react-native-config';

export const getTokenFromLogin = async (email: string, password: string) => {
  const response: AxiosResponse = await axios({
    url: `${env.NODE_SERVICE_URL}/api/authentication`,
    method: 'GET',
    data: {email, password},
  });

  return response.data;
};
