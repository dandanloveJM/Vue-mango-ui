<template>

	<button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
					@click="$emit('click', $event)">

		<Icon class="loading icon" v-if="loading" name="loading"></Icon>
		<Icon class="icon" :name="icon" v-if="icon && !loading"></Icon>
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
    @Prop({default: false}) loading!: boolean;
    @Prop({
      default: 'left',
      validator(value: string) {return (value === 'left' || value === 'right');}
    })
    iconPosition!: string;

  }
</script>

<style scoped lang="scss">
@import "~@/assets/style/button.scss";
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.loading {
		animation: spin 1s infinite linear;
	}

	.g-button {
		font-size: $font-size;
		height: $button-height;
		padding: 0 1em;
		border-radius: $border-radius;
		border: 1px solid $border-color;
		background: $button-bg;
		display: inline-flex; // 变成弹性盒子
		justify-content: center;
		align-items: center;
		vertical-align: middle;


		&:hover {
			border-color: $border-color-hover;
		}

		&:active {
			background-color: #eee;
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