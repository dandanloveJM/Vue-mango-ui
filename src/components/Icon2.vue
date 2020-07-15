<template>
	<svg class="icon" @click="$emit('click', $event)">
		<use :xlink:href="`#i-${name}`"></use>
	</svg>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import './svg'

  @Component
  export default class Icon2 extends Vue {
    @Prop(String) name: string | undefined;
  }
</script>

<style scoped lang="scss">
	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
</style>