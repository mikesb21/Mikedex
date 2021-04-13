import axios from 'axios';
import config from '../config';

const pokedexApi = axios.create({
  baseURL: config.pokedexUrl,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

export const fetchPokedex = () => {
  return fetch(`${config.pokedexUrl}/pokemon`).then((data) => data.json());
};

export const fetchSprite = (id: number) => {
  return fetch(`${config.pokemonImageUrl}${id}.png`);
};

export const fetchNextPage = (nextPage: string | null | undefined) => {
  return fetch(`${nextPage}`).then((data) => data.json());
};

export const fetchPreviousPage = (previousPage: string | null | undefined) => {
  return fetch(`${previousPage}`).then((data) => data.json());
};
