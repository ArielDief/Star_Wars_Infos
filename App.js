import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import DetalhesPersonagens from "./src/pages/DetalhesPersonagens";
import InformacoesFilmes from "./src/pages/InformacoesFilmes";
import InformacoesNaves from "./src/pages/InformacoesNaves";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={DetalhesPersonagens}
          name="DetalhesPersonagens"
          options={{
            title: "Informações Personagem",
          }}
        />
        <Stack.Screen
          component={InformacoesNaves}
          name="InformacoesNaves"
          options={{
            title: "InformacoesNaves",
          }}
        />
        <Stack.Screen
          component={InformacoesFilmes}
          name="InformacoesFilmes"
          options={{
            title: "InformacoesFilmes",
          }}
          />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
