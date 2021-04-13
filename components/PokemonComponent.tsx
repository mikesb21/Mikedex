// React
import React from 'react';
import { Image, StyleSheet } from 'react-native';

// Components
import { Text, View } from '../components/Themed';

// Types
import { PokemonPreview } from '../types/pokedex.types';

// Utils
import { capitalizedName, pokemonId } from '../utils/pokemon';

const imageUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const PokemonComponent = ({ pokemon }: { pokemon: PokemonPreview }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${imageUrl + pokemonId(pokemon.url)}.png` }}
        style={{ width: 400, height: 400 }}
      />
      <Text style={styles.title}>{capitalizedName(pokemon.name)}</Text>
    </View>
  );
};

export default PokemonComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
