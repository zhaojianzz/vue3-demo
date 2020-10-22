<template>
  <div>
    <component :is="component" ghost type="primary"> isComponent</component>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const component = "a-button";
    return {
      component
    };
  }
});
</script>
