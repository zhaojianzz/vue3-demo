import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { highlight } from "@/utils/directive";
const app: ReturnType<typeof createApp> = createApp(App);
app
  .use(Antd)
  .use(store)
  .use(router)
  .mount("#app");
highlight(app);
