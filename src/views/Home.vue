<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div v-highlight="'red'">home msg: {{ msg }}</div>
    <HelloWorld v-model:msg="msg" />
    <Directive />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, ref, watch } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    Directive: defineAsyncComponent(() => import("@/components/directive.vue"))
  },
  setup() {
    const msg = ref("Welcome to Your Vue.js + TypeScript App");
    watch(
      () => msg,
      (newVal, oldVal) => {
        console.log("watch");
        console.log("newVal :>> ", newVal);
        console.log("oldVal :>> ", oldVal);
        console.log("msg :>> ", msg);
      }
    );
    return {
      msg
    };
  }
});
</script>
