import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Tabs/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../Screens/Tabs/Profile";

// Define the type for the icon mapping
interface IconTS {
  [key: string]: string;
}

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from "../Utils/Colors";
import CompletedCourses from "../Screens/Tabs/CompletedCourses";
import Notes from "../Screens/Tabs/Notes";
import CourseDetails from "../Screens/CourseDetails";
import SearchScreen from "../Screens/SearchScreen";


const stack = createNativeStackNavigator()


const Navigators = () => {
  return (
 <stack.Navigator screenOptions={{headerShown: false}}
  // initialRouteName="SearchScreen"
 >
    <stack.Screen name="Tabs" component={Tabs}

    />
    {/* Pass the tab function here the inital tab will show by default*/}
    <stack.Screen name="CourseDetails" component={CourseDetails} />
    <stack.Screen name="SearchScreen" component={SearchScreen} />
 </stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const Tabs = () =>{
  
  const icons: IconTS = {
    Home: 'home',
    Profile: 'user',  // Example: If you have a Profile screen
    CompletedCourses: "graduation-cap",
    Notes: "sticky-note-o"

  };
  return (
  <Tab.Navigator

  // Very important 
  // one thing you will notice that function writeen as
  // () => ({ })
  // not as () => {} then why round bracket
  // basically in screenOpitons we use an high order funtion in which we paassed props "route"
  // then we written objects(Props of screenOptins) such as
  //  tabBarIcon ,tabBarActiveTintColor tabBarInactiveTintColor and many

  // BTW route: (it has infor of route name , params) 
  // and why high order Fn used so that we can cater every tabBar not specificaly one basically abstracting the data fr


  screenOptions={  ({ route }) => ({

    // react navigaiton gives size acc to itself
    // and icon color can be change by tabBarActiveTintColor
    tabBarIcon: ({ color, size }) => {
      return (
        <FontAwesome name={icons[route.name]} size={size} color={color} />
      );
    },
    // tabBarIconStyle={{size}},
    tabBarActiveTintColor: colors.PRIMARY ,  // Customize active icon color
    tabBarInactiveTintColor: '#D1D1D1',  // Customize inactive icon color
    headerShown: false,
    tabBarShowLabel:false
    
    
  })}
  >
    <Tab.Screen name="Home" component={Home} 
   />
    <Tab.Screen name="CompletedCourses" component={CompletedCourses} />
    <Tab.Screen name="Notes" component={Notes} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator> 
  )
}


export default Navigators
