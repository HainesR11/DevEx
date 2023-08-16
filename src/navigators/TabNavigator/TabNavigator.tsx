import { createStackNavigator } from "@react-navigation/stack"
import HomeNavigator from "../HomeNavigator/HomeNavigator"

type TTabNavigatorProps = {
    HomeNavigator: undefined,
}

const TabNavStack = createStackNavigator<TTabNavigatorProps>()

const TabNavigator = () => {
    return (
        <TabNavStack.Navigator>
            <TabNavStack.Screen name="HomeNavigator" component={HomeNavigator}/>
        </TabNavStack.Navigator>
    )
}

export default TabNavigator