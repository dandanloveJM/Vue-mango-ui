<template>
	<div class="tabs-header">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class TabHeader extends Vue {
    name: 'TabNav';
  }
</script>

<style scoped lang="scss">
.tabs-header {

}
</style>