<template>
  <div v-for="item of list" :key="item">
    {{ item }}
  </div>
  <a-button ghost type="primary" @click="onAdd"> add</a-button>
  <div ref="divRef">
    divref
  </div>
</template>
<script>
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    const data = reactive({
      list: []
    });
    const divRef = ref(null);
    const onAdd = () => {
      console.log("refItem :>> ", data.list);
      data.list.push(11);
    };
    return {
      ...toRefs(data),
      divRef,
      onAdd
    };
  }
};
</script>
