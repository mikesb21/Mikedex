// React
import React, { useState, useEffect, useRef } from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';

// Components
import { Text, View } from '../components/Themed';
import PokemonComponent from '../components/PokemonComponent';

// Api
import {
  fetchPokedex,
  fetchNextPage,
  fetchPreviousPage,
} from '../apis/pokedex-api';

// Types
import { Pokedex } from '../types/pokedex.types';

const PokedexScreen = () => {
  const [pokedex, setPokedex] = useState<Pokedex>();
  const scrollRef = useRef<ScrollView>();

  useEffect(() => {
    fetchPokedex().then((pokemonList) => setPokedex(pokemonList));
  }, []);

  const onPress = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const previousPokedexPage = () => {
    fetchPreviousPage(pokedex?.previous).then((previousPokemonList) =>
      setPokedex(previousPokemonList)
    );
    onPress();
  };

  const nextPokedexPage = () => {
    fetchNextPage(pokedex?.next).then((newPokemonList) =>
      setPokedex(newPokemonList)
    );
    onPress();
  };

  return (
    <ScrollView>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {pokedex?.results.map((pokemon) => {
        return <PokemonComponent key={pokemon.name} pokemon={pokemon} />;
      })}
      <View style={styles.container}>
        {pokedex?.previous && (
          <Button title="previous" onPress={previousPokedexPage}></Button>
        )}

        {pokedex?.next && (
          <Button title="next" onPress={nextPokedexPage}></Button>
        )}
      </View>
    </ScrollView>
  );
};

export default PokedexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
