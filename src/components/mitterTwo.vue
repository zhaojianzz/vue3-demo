<template>
  <div>
    <h1>name: mitt two</h1>
    <a-button ghost type="primary" @click="handleClick">Click two</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { emitter } from "@/mitt/index";
export default defineComponent({
  setup() {
    emitter.on("clickOne", e => console.log("e :>> ", e));
    function handleClick() {
      emitter.emit("clickTwo", "click Two");
    }
    return {
      handleClick
    };
  }
});
</script>
