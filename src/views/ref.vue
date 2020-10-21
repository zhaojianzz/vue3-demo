<template>
  <div v-for="item of list" :ref="setRefItems" :key="item">
    {{ item }}
  </div>
  <div ref="divRef">
    divref
  </div>
</template>
<script>
import { onBeforeUpdate, onMounted, onUpdated, ref } from "vue";
export default {
  setup() {
    const list = [1, 2, 3, 4];
    let refItems = [];
    const divRef = ref(null);
    const setRefItems = el => {
      refItems.push(el);
    };
    onMounted(() => {
      console.log("refItems :>> ", refItems);
      console.log("divRef :>> ", divRef.value.innerText);
    });
    onBeforeUpdate(() => {
      refItems = [];
    });
    onUpdated(() => {
      console.log("1 :>> ", 1);
      console.log("refImtes[0] :>> ", refItems[0]);
    });
    return {
      list,
      refItems,
      divRef,
      setRefItems
    };
  }
};
</script>
