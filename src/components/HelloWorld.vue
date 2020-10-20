<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <h1>{{name}}</h1>
  <h2>count:{{count}}</h2>
  <a-button type='primary' @click="onClick" ghost>count ++ </a-button>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  Ref,
  ref,
  Slots,
  toRefs,
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
  created() {
    console.log('created');
  },
  setup(props, content) {
    const count: Ref<number> = ref(0);
    const state = reactive({
      count,
      name: 'name'
    })
    const onClick: Function = (): void => {
      count.value++;
      state.name = 'click name';
    }
    watchEffect(() => {
      console.log(`count is: ` + count.value);
      console.log(props.msg);
    },)
    onMounted(() => {
      console.log('onMounted');
    })
    return {
      onClick,
      ...toRefs(state)
    }
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  }
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
