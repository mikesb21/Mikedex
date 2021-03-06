// React
import React from 'react';

// Components
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

// Types
import { PokemonPreview } from '../types/pokedex.types';

// Utils
import config from '../config';
import { capitalizedName } from '../utils/pokemon';

const PokemonComponent = ({ pokemon }: { pokemon: PokemonPreview }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${config.pokemonImageUrl + pokemon.id}.png`,
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{capitalizedName(pokemon.name)}</Text>
    </View>
  );
};

export default PokemonComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 15,
    backgroundColor: '#f2f2f2',
    width: Dimensions.get('window').width * 0.976,
    height: Dimensions.get('window').height * 0.26,
  },
  image: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.24,
  },
  name: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
