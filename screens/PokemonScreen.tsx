import React, { useState, useEffect } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const PokemonScreen = () => {
  return (
    <View>
      <Text>Pokemon</Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

export default PokemonScreen;