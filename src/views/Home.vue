<template>
  <div class="home">
    <g-button icon="down">
      按钮1
    </g-button>
    <g-button icon="down" :loading="true">
      按钮2
    </g-button>
    <g-button icon="down" icon-position="right">
      按钮3
    </g-button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import GButton from '@/components/g-button.vue';
  @Component({
    components: {GButton}
  })
  export default class Home extends Vue{

  }
</script>
