<template>
  <div>
    <h1>name: mitt one</h1>
    <a-button ghost type="primary" @click="handleClick">Click One</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import { emitter } from "@/mitt/index";
export default defineComponent({
  setup() {
    emitter.on("clickTwo", e => console.log("e :>> ", e));
    function handleClick() {
      emitter.emit("clickOne", "click One");
    }
    onUnmounted(() => {
      emitter.off("clickTwo", e => console.log("e :>> ", e));
    });
    return {
      handleClick
    };
  }
});
</script>
