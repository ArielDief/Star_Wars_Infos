import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import DetalhesPersonagens from "./src/pages/DetalhesPersonagens";
import InformacoesFilmes from "./src/pages/InformacoesFilmes";
import InformacoesNaves from "./src/pages/InformacoesNaves";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();


export default function App() { 
  function sobreTrabalho(){
    alert ("Ariel Diefenthaeler Oliveira " + "RA:1134433 " + "email: 1134433@atitus.edu.br "+ "\n"+ "Ábner Panazollo " + "RA:1134868 " + "email: 1134868@atitus.edu.br")
  }
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
            headerShown: true,
            title: "Personagens",
            headerRight: () => (
              <Button
              title="Sobre"
              onPress={() => sobreTrabalho()} />
            )
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
            title: "Informações Naves",
          }}
        />
        <Stack.Screen
          component={InformacoesFilmes}
          name="InformacoesFilmes"
          options={{
            title: "Informações Filmes",
          }}
          />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
