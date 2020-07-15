<template>
	<div class="row">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Row extends Vue {

  }
</script>

<style scoped lang="scss">
.row {
	display: flex;
}
</style>