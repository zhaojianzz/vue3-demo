import { App } from "vue";

export function highlight(app: App) {
  app.directive("highlight", {
    beforeMount(el: HTMLElement, binding) {
      console.log("el :>> ", el);
      el.style.background = binding.value;
    }
  });
}
export function loading(app: App) {
  app.directive("loading", {
    beforeMount(el: HTMLElement, binding) {
      console.log("el :>> ", el);
      el.style.background = binding.value;
    }
  });
}
