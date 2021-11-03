import axios from "axios";
import PokemonClass from "@/models/Pokemon.model";
import Utils from "@/helpers/Utils";

class PokemonService {
  public async randomPokemon(): Promise<PokemonClass> {
    const url = `https://pokeapi.co/api/v2/pokemon/${Utils.getRandomPokemonName()}`;
    const response = await axios.get<PokemonClass>(url);
    return response.data;
  }
}

export default new PokemonService();
