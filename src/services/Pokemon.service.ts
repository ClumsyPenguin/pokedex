import axios from "axios";
import PokemonClass from "@/models/Pokemon.model";
import Utils from "@/helpers/Utils";

const PokeApiBaseUrl = "https://pokeapi.co/api/v2/pokemon/";

class PokemonService {
  public async randomPokemon(): Promise<PokemonClass> {
    const url = PokeApiBaseUrl + Utils.getRandomPokemonName();
    const response = await axios.get<PokemonClass>(url);
    response.data.sprites.front_default = Utils.getPokemonImage(response.data.id);
    return response.data;
  }
}

export default new PokemonService();
