<template>
  <button @click="onClick">Button</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    onClick() {
      console.log('Click');
    }
  }
});
</script>
