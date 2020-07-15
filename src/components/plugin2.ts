import _Vue from "vue";
import Toast from '../components/Toast.vue';

export default new class ToastPlugin {
  public install(Vue: typeof _Vue) {
    Vue.prototype.$toast = function (message: string) {
      const Constructor = Vue.extend(Toast)
      const toast = new Constructor()

      // @ts-ignore
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}();
declare module 'vue/types/vue' {
  interface VueConstructor {
    $toast: (message: string) => void;
  }
}
