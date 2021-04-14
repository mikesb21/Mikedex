// React
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

// GraphQL
import { useQuery } from '@apollo/client';
import { GET_POKEDEX_QUERY } from '../apis/pokedex-api';

// Components
import { View } from '../components/Themed';
import PokemonComponent from '../components/PokemonComponent';

// Types
import { PokemonPreview } from '../types/pokedex.types';

const PokedexScreen = () => {
  const { data, error } = useQuery(GET_POKEDEX_QUERY);

  if (error) return <Text>Error! ${error.message}</Text>;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {data?.pokemon_v2_pokemon.map((pokemon: PokemonPreview) => {
        return <PokemonComponent key={pokemon.name} pokemon={pokemon} />;
      })}
    </ScrollView>
  );
};

export default PokedexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d90000',
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
