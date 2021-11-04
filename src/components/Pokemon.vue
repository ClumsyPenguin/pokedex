<template>
  <h1>{{ pokemon.name }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokemonClass from "../models/Pokemon.model";


export default defineComponent({
  name: "Pokemon",
  props: {
    pokemon: {
      type: Object as () => PokemonClass,
      required: true,
    },
  },
   components: {
    }
});
</script>
