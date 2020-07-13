<template>
  <div class="about">
    <Button></Button>
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  @Component({
    components: {Button}
  })
  export default class About extends Vue{

  }
</script>