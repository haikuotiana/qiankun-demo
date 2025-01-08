import { createApp } from 'vue'
import router from './router/index.js'
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import './style.css'
import App from './App.vue';
let app;
const render = (container) => {
  app = createApp(App);
  app.use(router);
  app.mount(container ? container.querySelector("#app") : "#app");
};
const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container } = props;
      props.onGlobalStateChange((state, prev) => {
        console.log(state,prev);
      });
      render(container);
    },
    bootstrap() {},
    unmount() {
      app.unmount();
    },
  });
};
qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render();
// 判断是直接访问还是通过qiankun，在主应用里加载微应用
