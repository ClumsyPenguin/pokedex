<template>
  <div class="home">
    <div v-if="isLoaded">
      <pokemon-info :pokemon="pokemon" />
    </div>
    <div v-else>
      <span>Data is loading...</span>
    </div>
  </div>
</template>

<script lang="ts">
import PokemonClass from "@/models/Pokemon.model";
import { Options, Vue } from "vue-class-component";
import PokemonInfo from "../components/Pokemon.vue";
import PokemonService from "../services/Pokemon.service";

@Options({
  components: {
    PokemonInfo,
  },
})
export default class Home extends Vue {
  public pokemon: PokemonClass;
  private isLoaded = false;
  async mounted() {
    this.pokemon = await PokemonService.randomPokemon();
    this.isLoaded = true;
  }
}
</script>
