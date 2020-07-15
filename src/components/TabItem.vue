<template>
	<div class="tab-item">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class TabItem extends Vue {

  }
</script>

<style scoped lang="scss">
.tab-item{

}
</style>