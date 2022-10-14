/// <reference types="vite/client" />

import { MessagePluginType } from "tdesign-vue-next";
declare module "*.vue" {
  import { DefineComponent } from "vue";

  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare global {
  interface Window {
    $message: MessagePluginType;
  }
}
