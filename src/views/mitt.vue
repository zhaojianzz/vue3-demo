<template>
  <div>
    <mitter-one />
    <mitter-two />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import mitterOne from "@/components/mitterOne.vue";
import mitterTwo from "@/components/mitterTwo.vue";

export default defineComponent({
  components: {
    mitterOne,
    mitterTwo
  }
});
</script>
