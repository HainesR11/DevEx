import {setUser} from '@DevEx/utils/store/userSlice/userSlice';
import {useEffect} from 'react';
import {Appearance} from 'react-native';
import {useDispatch} from 'react-redux';

const useDarkMode = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const darkmode = Appearance.getColorScheme() === 'dark' ? true : false;
    dispatch(setUser({isDarkMode: darkmode}));
  }, [dispatch]);
};
