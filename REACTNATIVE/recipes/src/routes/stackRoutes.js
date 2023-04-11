import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Search } from "../pages/Search";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: "Details of Recipe",
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: "Look at what we found...",
        }}
      />
    </Stack.Navigator>
  );
}
