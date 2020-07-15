<template>
	<div class="col" :class="[`col-${span}`]">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Col extends Vue {
    @Prop([Number, String]) span: number | string | undefined;
  }
</script>

<style scoped lang="scss">
	.col {
		height: 100px;
		background: gray;
		width: 50%;
		border: 1px solid red;

		$class-prefix: col-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}
	}
</style>