import _Vue from 'vue';
import Toast from '../components/Toast.vue';

type ToastOptions = {
  autoClose: boolean;
  position: string;
  closeButton: () => {
    'text': string;
    'callback': () => void;
  };
}


export default new class ToastPlugin {
  public install(Vue: typeof _Vue) {
    Vue.prototype.$toast = function (message: string, toastOptions: ToastOptions) {
      const Constructor = Vue.extend(Toast);
      const toast = new Constructor({
        propsData: toastOptions
      });
      console.log(toast)
      // @ts-ignore
      toast.$slots.default = [message];
      toast.$mount();
      console.log(toast.$props)
      document.body.appendChild(toast.$el);
    };
  }
}();
declare module 'vue/types/vue' {
  interface VueConstructor {
    $toast: (message: string) => void;
  }
}
