import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
const stack = createNativeStackNavigator()


const Navigations = () => {
  return (
 <stack.Navigator>
    <stack.Screen name="Home" component={Home} />
 </stack.Navigator>
  )
}




export default Navigator
