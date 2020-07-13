<template>

	<button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
		<Icon class="icon" :name="icon" v-if="icon"></Icon>
		<div class="content">
			<slot></slot>
		</div>
	</button>


</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';

  @Component({
    components: {Icon}
  })
  export default class Button extends Vue {
    @Prop(String) icon: string | undefined;
    @Prop({
      default: 'left',
      validator(value: string) {return (value === 'left' || value === 'right');}
    })
    iconPosition!: string;

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
		display: inline-flex; // 变成弹性盒子
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

		> .icon {
			order: 1;
			margin-right: .1em;
		}

		> .content {
			order: 2;
		}

		&.icon-right {
			> .icon {
				order: 2;
				margin-right: 0;
				margin-left: .1em;
			}

			> .content {
				order: 1;

			}
		}

	}
</style>