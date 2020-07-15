<template>
	<div class="tabs-header">
		<slot></slot>
		<div class="actions-wrapper">
			<slot name="actions"></slot>
		</div>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject} from 'vue-property-decorator';

  @Component
  export default class TabHead extends Vue {
    @Inject() eventbus!: Vue;

  }
</script>

<style scoped lang="scss">
	$tab-height: 40px;
	.tabs-header {
		display: flex;
		height: $tab-height;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid red;
		> .actions-wrapper {
			margin-left: auto;
		}
	}
</style>