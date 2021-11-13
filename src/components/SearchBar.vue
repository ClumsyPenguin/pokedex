<template>
    <n-space justify="end">
          <n-auto-complete class="search-bar" :options="options" v-model:value="value" placeholder="Pokemon" />
    </n-space>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {NSpace, NAutoComplete} from "naive-ui";

export default defineComponent({
  name: "SearchBar",
  props: {
    
  },
  setup () {
    const valueRef = "";
    return {
      value: valueRef,
      options: (() => {
        return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
          const prefix = valueRef.split('@')[0]
          return {
            label: prefix + suffix,
            value: prefix + suffix
          }
        })
      })
    }
  },
  components: {
      NSpace,
      NAutoComplete,
  }
});
</script>
<style>

</style>
