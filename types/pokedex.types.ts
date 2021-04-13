export type Pokedex = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonPreview>;
}

export type PokemonPreview = {
  name: string;
  url: string;
}