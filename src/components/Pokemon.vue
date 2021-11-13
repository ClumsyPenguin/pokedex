<template>
  <n-space justify="center">
    <n-card class="card-pokemon">
      <h1>{{ pokemon.name }}</h1>
      <img :src="pokemon.sprites.front_default" height="200" width="200"/>
      <n-card title="Stats">
          <n-space vertical v-for="stat in pokemon.stats" :key="stat.stat">
            <n-statistic :label="stat.stat.name">{{stat.base_stat}}</n-statistic>
          </n-space>
      </n-card>
    </n-card>  
  </n-space> 
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PokemonClass from "../models/Pokemon.model";
import { NSpace, NCard, NStatistic } from 'naive-ui'

export default defineComponent({
  name: "Pokemon",
  props: {
    pokemon: {
      type: Object as () => PokemonClass,
      required: true,
    },
  },
  components: {
    NSpace,
    NCard,
    NStatistic
  }
});
</script>
<style>
.card-pokemon{
  width: 60em;
}
</style>