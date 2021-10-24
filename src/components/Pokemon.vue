<template>
    <h1></h1>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PokemonClass from "../models/Pokemon.model";

@Options({
  props: {
    pokemon: {
      type: Object as () => PokemonClass,
      required: true
    }
  },
})
export default class PokemonInfo extends Vue {
  
}
</script>

</style>
