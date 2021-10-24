<template>
  <div class="home">
    <p>Pokemon</p>
    <Pokemon :pokemon="pokemon" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Pokemon from "../components/Pokemon.vue"

@Options({
  components: {
    Pokemon
  },
})
export default class Home extends Vue {
  private pokemon : Pokemon = new Pokemon();
  mounted() {
    
  }
}
</script>
