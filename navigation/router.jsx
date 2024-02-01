import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { navigationRef } from "./root-navigation";
const Stack = createNativeStackNavigator();
export default function Router() {
  return (
    <NavigationContainer
      theme={{
        colors: { text: "#81689D", card: "#474F7A" },
      }}
      ref={navigationRef}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          children={HomeScreen}
          options={{
            animation: "slide_from_bottom",

            title: "Home",
          }}
        />
        <Stack.Screen
          options={{ animation: "slide_from_bottom" }}
          name="Profile"
          children={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
