import pokemonJson from "../pokemon.json";

export default class Utils {
  static getRandomPokemonName(): string {
    const keys = Object.keys(pokemonJson);
    const rndIndex = Math.floor(Math.random() * keys.length);
    const rndKey: any = keys[rndIndex];
    return pokemonJson[rndKey].toLowerCase();
  }
}
