<template>
  <input type="text" v-model="input" />
  <h2>{{ input }}</h2>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    input: 'from Vue3'
  })
});
</script>
