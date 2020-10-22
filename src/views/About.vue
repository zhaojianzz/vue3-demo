<template>
  <div class="about">
    <h1>This is an about page</h1>
    <component :is="component" ghost type="primary"> isComponent</component>
  </div>
</template>
<script>
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
