import {
  GET_POKEMONS,
  GET_TYPES,
  FILTER_TYPE,
  FILTER_CREATED,
  ORDER_ALPHA,
  ORDER_ATTACK,
  GET_POKEMON,
  POST_POKEMON,
  GET_DETAIL,
  CLEAN,
} from "./actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  pokemon: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    case GET_TYPES:
      return { ...state, types: action.payload };

    case FILTER_TYPE:
      const allPokemons = state.allPokemons;
      let filterType;
      if (action.payload === "Todos") {
        filterType = allPokemons;
      } else {
        filterType = allPokemons.filter((p) => {
          return p.types.filter((t) => t.name === action.payload).length;
        });
      }

      return {
        ...state,
        pokemons: filterType,
      };

    case FILTER_CREATED:
      const allPokemon = state.allPokemons;
      let filterCreated;
      if (action.payload === "Todos") {
        filterCreated = allPokemon;
      } else {
        filterCreated = allPokemon.filter(
          (p) => p.createdInDb === action.payload
        );
      }

      return {
        ...state,
        pokemons: filterCreated,
      };

    case ORDER_ALPHA:
      let orderAlpha;
      if (action.payload === "asc") {
        orderAlpha = state.pokemons.sort(function (a, b) {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      } else if (action.payload === "des") {
        orderAlpha = state.pokemons.sort(function (a, b) {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      }
      return { ...state, pokemons: orderAlpha };

    case ORDER_ATTACK:
      let orderAttack;
      if (action.payload === "des") {
        orderAttack = state.pokemons.sort(function (a, b) {
          if (a.attack > b.attack) return 1;
          if (a.attack < b.attack) return -1;
          return 0;
        });
      } else if (action.payload === "asc") {
        orderAttack = state.pokemons.sort(function (a, b) {
          if (a.attack < b.attack) return 1;
          if (a.attack > b.attack) return -1;
          return 0;
        });
      }
      return { ...state, pokemons: orderAttack };

    case GET_POKEMON:
      return { ...state, pokemons: action.payload };

    case GET_DETAIL:
      return { ...state, pokemon: action.payload };

    case POST_POKEMON:
      return { ...state };

    case CLEAN:
      return { ...state, pokemon: [] };

    default:
      return { ...state };
  }
}

export default rootReducer;
