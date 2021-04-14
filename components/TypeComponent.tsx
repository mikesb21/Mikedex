// React
import React from 'react';

// Components
import { Dimensions, Image, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

// Types
import { Type } from '../types/pokedex.types';

// Utils
import { capitalizedName } from '../utils/pokemon';
import TypesImage from '../assets/images/TypesImage';

const TypeComponent = ({ type }: { type: Type }) => {
  return (
    <View style={styles.container}>
      <Image source={TypesImage[type.name]} style={styles.image} />
      <Text style={styles.name}>{capitalizedName(type.name)}</Text>
    </View>
  );
};

export default TypeComponent;

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
    borderRadius: 25,
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').height * 0.12,
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: 64,
    height: 64,
    marginBottom: 10,
  },
  name: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
