import { createApp } from "vue";
import "@src/styles/index.scss";
import Devtools from "./Devtools.vue";

const bootstrap = () => {
  try {
    chrome.devtools.panels.create(
      "My new Dev Tools panel",
      "src/icon-34.png",
      "src/devtools/index.html"
    );
  } catch (e) {
    console.error(e);
  }
  createApp(Devtools).mount("#app");
};

bootstrap();
