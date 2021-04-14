export type Pokedex = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonPreview>;
};

export type PokedexGQL = {
  pokemon_v2_pokemon: Array<PokemonPreview>;
};

export type PokemonPreview = {
  name: string;
  id: string;
};

export type Types = {
  pokemon_v2_type: Array<Type>;
};

export type Type = {
  name: string;
  id: string;
};
