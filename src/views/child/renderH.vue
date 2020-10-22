<script lang="ts">
import { defineComponent, h, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0
    });
    function increment() {
      state.count++;
    }
    return () =>
      h(
        "div",
        {
          onClick: increment,
          class: "asda"
        },
        `count:${state.count}`
      );
  }
});
</script>
