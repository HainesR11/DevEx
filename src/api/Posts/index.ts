import axios from 'axios';
import env from 'react-native-config';

export const getPosts = async () => {
  const response = await axios({
    url: `http://localhost:4000/api/posts`,
    method: 'GET',
  });

  return response.data;
};
