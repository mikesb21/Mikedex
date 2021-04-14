import gql from 'graphql-tag';

export const GET_POKEDEX_QUERY = gql`
  query {
    pokemon_v2_pokemon(limit: 10) {
      name
      id
    }
  }
`;

export const GET_TYPES_QUERY = gql`
  query {
    pokemon_v2_type(limit: 18) {
      id
      name
    }
  }
`;
