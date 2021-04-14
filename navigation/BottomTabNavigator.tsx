import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PokedexScreen from '../screens/PokedexScreen';
import {
  BottomTabParamList,
  PokedexParamList,
  TypesParamList,
} from '../types/types';
import TypesScreen from '../screens/TypesScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Pokedex"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Pokedex"
        component={PokedexNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIconMCI name="pokeball" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Types"
        component={TypesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIconMCI name="pokemon-go" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIconIOS(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIconMCI(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const PokedexStack = createStackNavigator<PokedexParamList>();

function PokedexNavigator() {
  return (
    <PokedexStack.Navigator>
      <PokedexStack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ headerTitle: 'Pokedex' }}
      />
    </PokedexStack.Navigator>
  );
}

const TypesStack = createStackNavigator<TypesParamList>();

function TypesNavigator() {
  return (
    <TypesStack.Navigator>
      <TypesStack.Screen
        name="Types"
        component={TypesScreen}
        options={{ headerTitle: 'Types' }}
      />
    </TypesStack.Navigator>
  );
}
