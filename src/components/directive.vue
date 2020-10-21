<script lang="ts">
import { defineComponent, h } from "vue";
export default defineComponent({
  render() {
    return h(
      "div",
      {
        directives: [
          {
            name: "highlight",
            value: "red"
          }
        ]
      },
      "renderComponent"
    );
  }
});
</script>
