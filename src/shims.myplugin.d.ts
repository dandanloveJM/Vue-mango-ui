import Vue from 'vue';
import Plugin from '../src/components/plugin2';

declare module 'vue/types/vue' {
  interface Vue {
    $toast: (message: string) => void;
  }
}