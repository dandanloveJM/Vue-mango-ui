<template>
	<svg class="icon" @click="$emit('click', $event)">
		<use :xlink:href="'#' + name"></use>
	</svg>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {
		// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (error) {
    console.log(error);
  }

  @Component
  export default class Icon extends Vue {
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