const { Router } = require("express");
const { Pokemon, Type } = require("../db");
const router = Router();
const { getAllInfo, getApiInfo, getDBInfo } = require("./gets.js");

router.post("/", async (req, res) => {
  try {
    const { name, hp, attack, defense, velocity, height, weight, type, image } =
      req.body;

    if (!name || !type)
      return res.status(404).send("Falta enviar datos obligatorios");
    const newPokemon = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      velocity,
      height,
      weight,
      image,
    });
    const newType = await Type.bulkCreate(type);
    await newPokemon.addType(newType);
    const resul = await Pokemon.findOne({
      where: { name },
      include: Type,
    });
    return res.status(200).send(resul);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const resul = await getAllInfo();
    const pokemons = resul.map((el) => {
      return {
        id: el.id,
        name: el.name,
        image: el.image,
        types: el.types.map((t) => t),
        attack: el.attack,
        createdInDb: el.createdInDb,
      };
    });

    const { name } = req.query;
    if (!name) {
      return res.status(200).send(pokemons);
    } else {
      const pokeByName = pokemons.filter((pokemon) => pokemon.name === name);
      if (!pokeByName.length)
        return res
          .status(404)
          .send(`No se encontro un pokemon con el nombre ${name}`);
      return res.status(200).send(pokeByName);
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pokemones = await getAllInfo();
    const { id } = req.params;
    const pokemon = pokemones.filter((p) => id == p.id);
    if (!pokemon.length)
      return res.status(404).send(`El id ${id} no pertenece a ningun pokemon`);

    return res.status(200).send(pokemon);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = router;
