import React from 'react';
import {useDispatch} from 'react-redux';

import {PrimaryButton} from '@DevEx/components';
import ScreenWithHeader from '@DevEx/components/ScreenWithHeader/ScreenWithHeader';
import {accountDetailsStub} from '@DevEx/test/stubs';
import {setUser} from '@DevEx/utils/store/userSlice/userSlice';

const DebugScreen = () => {
  const dispatch = useDispatch();
  return (
    <ScreenWithHeader isFirstScreen={false}>
      <PrimaryButton
        title="Set Account"
        onPress={() => dispatch(setUser(accountDetailsStub))}
      />
    </ScreenWithHeader>
  );
};
export default DebugScreen;
