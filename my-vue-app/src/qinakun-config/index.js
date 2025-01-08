import { registerMicroApps } from "qiankun";
import subApps from "./microApps.js";//引入微应用信息配置
export function injectMicroApps() {
  try {
    registerMicroApps(subApps, {
      beforeLoad: [
        (app) => {
          console.log("before load", app);
        },
      ],
      beforeMount: [
        (app) => {
          console.log("before mount", app);
        },
      ],
      afterUnmount: [
        (app) => {
          console.log("before unmount", app);
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
}