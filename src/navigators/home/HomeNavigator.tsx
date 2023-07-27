import Home from "@DevEx/screens/Authenticated/Home"
import { createStackNavigator } from "@react-navigation/stack"

type HomeNavParams = {
    Home: undefined
}

const HomeNavigatorStack = createStackNavigator<HomeNavParams>()


const HomeNavigator = () => {
    return(
        <HomeNavigatorStack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <HomeNavigatorStack.Screen name="Home" component={Home}/>
        </HomeNavigatorStack.Navigator>
    )
}
export default HomeNavigator