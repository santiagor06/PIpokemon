import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const FILTER_TYPE = "FILTER_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_ALPHA = "ORDER_ALPHA";
export const ORDER_ATTACK = "ORDER_ATTACK";
export const GET_POKEMON = "GET_POKEMON";
export const POST_POKEMON = "POST_POKEMON";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN = "CLEAN";

export const getPokemons = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/pokemons/")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_POKEMONS, payload: data }));
  };
};
export const getTypes = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/types/")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_TYPES, payload: data }));
  };
};

export const getPokemon = (payload) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/pokemons?name=${payload}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_POKEMON, payload: data }))
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const getDetail = (payload) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/pokemons/${payload}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_DETAIL, payload: data }))
      .catch((err) => {
        console.log(err.message);
      });
  };
};
export const postPokemon = (payload) => {
  try {
    return async function (dispatch) {
      await axios.post("http://localhost:3001/pokemons", payload);
      dispatch({ type: POST_POKEMON });
    };
  } catch (error) {
    console.log(error.message);
  }
};
export const filterType = (payload) => {
  return { type: FILTER_TYPE, payload };
};

export const filterCreated = (payload) => {
  return { type: FILTER_CREATED, payload };
};

export const orderAlpha = (payload) => {
  return { type: ORDER_ALPHA, payload };
};

export const orderAttack = (payload) => {
  return { type: ORDER_ATTACK, payload };
};

export const clean = () => {
  return { type: CLEAN };
};
