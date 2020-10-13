<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <h2>count:{{count}}</h2>
  <a-button type='primary' @click="onClick">count ++ </a-button>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Slots,
  watchEffect
} from "vue";
interface Data {
  msg: string
}
interface SetupContext {
  attrs: Data
  slots: Slots
  emit: (event: string, ...args: unknown[]) => void;
}
export default defineComponent({
  count: "HelloWorld",
  props: {
    msg: String
  },
  setup(props, content) {
    const count = ref(0);
    const onClick: Function = (): void => {
      count.value++;
    }
    watchEffect(() => {
      console.log(`count is: ` + count.value);
    })
    return {
      count,
      onClick
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
