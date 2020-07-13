<template>
	<div>
		<button class="g-button">按钮</button>
		<svg> <use xlink:href="#i-setting"></use> </svg>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Button extends Vue {

  }
</script>

<style scoped lang="scss">
	.g-button {
		font-size: var(--font-size);
		height: var(--button-height);
		padding: 0 1em;
		border-radius: var(--border-radius);
		border: 1px solid var(--border-color);
		background: var(--button-bg);
		display: inline-flex;
		justify-content: center;
		align-items: center;
		vertical-align: middle;

		&:hover {
			border-color: var(--border-color-hover);
		}

		&:active {
			background-color: var(--button-active-bg);
		}

		&:focus {
			outline: none;
		}
	}
</style>