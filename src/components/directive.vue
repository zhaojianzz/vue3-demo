<script lang="ts">
import { defineComponent, h } from "vue";
export default defineComponent({
  render() {
    return h(
      "div",
      {
        class: "aaa",
        directives: [
          {
            name: "highlight",
            value: "red"
          },
          {
            name: "loading",
            value: "red"
          }
        ],
        on: {
          click: () => {
            console.log("1 :>> ", 1);
          }
        }
      },
      "renderComponent"
    );
  }
});
</script>
