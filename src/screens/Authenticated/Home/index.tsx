import { PrimaryButton } from '@DevEx/components';
import { setUser } from '@DevEx/utils/store/userSlice/userSlice';
import {SafeAreaView, Text} from 'react-native';
import { useDispatch } from 'react-redux';

const Home = () => {

  const dispatch = useDispatch()

  return (
    <SafeAreaView>
      <Text>Home Page</Text>
      <PrimaryButton title='press' onPress={() => dispatch(setUser({isAuthenticated: false}))}/>
    </SafeAreaView>
  );
};
export default Home;
