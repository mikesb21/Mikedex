// React
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// Components
import { View, Text } from '../components/Themed';
import TypeComponent from '../components/TypeComponent';

// Api
import { GET_TYPES_QUERY } from '../apis/pokedex-api';

// Types
import { Type } from '../types/pokedex.types';
import { useQuery } from '@apollo/client';

const TypesScreen = () => {
  const { data, error } = useQuery(GET_TYPES_QUERY);

  if (error) return <Text>Error! ${error.message}</Text>;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {data?.pokemon_v2_type.map((type: Type) => {
        return <TypeComponent key={type.name} type={type} />;
      })}
    </ScrollView>
  );
};

export default TypesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d90000',
    borderRadius: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
