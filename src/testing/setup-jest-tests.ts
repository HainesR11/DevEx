export const mockNavigate = jest.fn();
export const mockDispatch = jest.fn();
export const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),

  useNavigation: () => ({
    navigate: mockNavigate,
    dispatch: mockDispatch,
    goBack: mockGoBack,
  }),
}));

jest.mock('@react-navigation/stack', () => ({
  ...jest.requireActual('@react-navigation/stack'),

  createStackNavigation: jest.fn(),
}));

export const mockGetItem = jest.fn();
export const mockSetItem = jest.fn();
export const mockClear = jest.fn();
export const mockRemoveItem = jest.fn();
jest.mock('react-native-encrypted-storage', () => ({
  getItem: mockGetItem,
  setItem: mockSetItem,
  clear: mockClear,
  removeItem: mockRemoveItem,
}));

export const mockAsyncGetItem = jest.fn();
export const mockAsyncSetItem = jest.fn();

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: mockAsyncGetItem,
  setItem: mockAsyncSetItem,
  removeItem: mockRemoveItem,
}));

jest.mock('redux-persist', () => {
  return {
    ...jest.requireActual('redux-persist'),
    persistReducer: jest
      .fn()
      .mockImplementation((_config, reducers) => reducers),
  };
});
