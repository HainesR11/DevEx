import { Login } from "@DevEx/screens";
import { RootState } from "@DevEx/utils/store/store";
import React, { Children, FC } from "react";
import { useSelector } from "react-redux";

interface TOnboardingWrapper {
    children?: React.ReactNode
}

const OnboardingWrapper: FC<TOnboardingWrapper> = ( {children}: any ) => {
    const { isAuthenticated } = useSelector((state: RootState) => state.user)

    const onboardingCollection = [];

    const shouldShowLoginScreen = !isAuthenticated;
    onboardingCollection.push({
      component: <Login />,
      rules: [shouldShowLoginScreen],
    });
  

    const onboardingActionsToRender = onboardingCollection.filter(onboardingItem => {
        return onboardingItem.rules.every(rule => rule === true);
      });


    if (onboardingActionsToRender && onboardingActionsToRender.length > 0) {
        return <>{onboardingActionsToRender[0].component}</>;
    }
    return <>{children}</>;
}

export default OnboardingWrapper