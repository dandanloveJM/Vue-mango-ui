<template>
	<div class="tabs-head">
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
	$blue: #2697ff;
	$border-color: #ddd;
	.tabs-head {
		display: flex;
		height: $tab-height;
		justify-content: flex-start;
		position: relative;
		border-bottom: 1px solid $border-color;
		> .actions-wrapper {
			margin-left: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 1em;
		}
	}

</style>