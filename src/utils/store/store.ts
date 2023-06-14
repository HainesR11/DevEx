import {USER_SLICE} from '@DevEx/constants/sliceConstant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import userReducer from '@DevEx/utils/store/userSlice/userSlice';

const userPersistConfig = {
  key: USER_SLICE,
  storage: AsyncStorage,
};

const listenerMiddleware = createListenerMiddleware();

const reducers = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(listenerMiddleware.middleware),
});

export const persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
