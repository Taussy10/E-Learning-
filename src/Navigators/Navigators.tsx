import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
const stack = createNativeStackNavigator()


const Navigators = () => {
  return (
 <stack.Navigator screenOptions={{headerShown: false}} >
    <stack.Screen name="Home" component={Home} />
 </stack.Navigator>
  )
}




export default Navigators
