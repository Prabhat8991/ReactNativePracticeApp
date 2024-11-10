import React, { useState } from "react";
import StateScreen from "./screens/StateScreen";
import { UserContext } from "./screens/usercontext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DashboardScreen from "./screens/DashboardScreen";

const AppStack = createNativeStackNavigator()

const AppWrapper = () => {
 const [userRegistrationNumber, setUserRegistrationNumber] = useState(null)
return (<UserContext.Provider value={{userRegistrationNumber, setUserRegistrationNumber}}>
           <NavigationContainer initialRouteName={"Registration"}>
            <AppStack.Navigator>
              <AppStack.Screen name="Registration" component={StateScreen} options={{
                title: 'Registration'
               }}/>
              <AppStack.Screen name="Dashboard" component={DashboardScreen} options={{
                title: 'Dashboard'
               }}/>
             </AppStack.Navigator>
          </NavigationContainer>
 </UserContext.Provider>)

}

export default AppWrapper