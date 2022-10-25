const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getApiInfo = async () => {
  const firstPage = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const secondPage = await axios.get(firstPage.data.next);
  const allPokemons = [...firstPage.data.results, ...secondPage.data.results];
  const pokemones = await allPokemons.map(async (pokemon) =>
    axios.get(pokemon.url)
  );
  const pokemonF = await Promise.all(pokemones);
  const pokemonesfinall = await pokemonF.map((pokemon) => {
    return {
      id: pokemon.data.id,
      hp: pokemon.data.stats[0].base_stat,
      attack: pokemon.data.stats[1].base_stat,
      defense: pokemon.data.stats[2].base_stat,
      height: pokemon.data.height,
      weight: pokemon.data.weight,
      name: pokemon.data.name,
      types: pokemon.data.types.map((t) => {
        return { name: t.type.name, url: t.type.url };
      }),
      image: pokemon.data.sprites.other["official-artwork"].front_default,
      createdInDb: "API",
    };
  });
  return pokemonesfinall;
};
const getDBInfo = async () => {
  const pokemones = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      througth: {
        attributes: [],
      },
    },
  });
  return pokemones;
};

const getAllInfo = async () => {
  const API = await getApiInfo();
  const DB = await getDBInfo();
  return DB.concat(API);
};

const getAlltype = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/type");
  const types = await response.data.results.map((t) => {
    return { name: t.name };
  });
  return types;
};

module.exports = {
  getAllInfo,
  getApiInfo,
  getDBInfo,
  getAlltype,
};
