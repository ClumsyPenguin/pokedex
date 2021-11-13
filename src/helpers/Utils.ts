import pokemonJson from "../pokemon.json";

const pokemonImageBaseUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"
export default class Utils {
  static getRandomPokemonName(): string {
    const keys = Object.keys(pokemonJson);
    const rndIndex = Math.floor(Math.random() * keys.length);
    const rndKey: any = keys[rndIndex];
    return pokemonJson[rndKey].toLowerCase();
  }
  static getPokemonImage(index: number): string {
    return pokemonImageBaseUrl + index + ".png";
  } 
}
