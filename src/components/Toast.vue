<template>
	<div class="toast">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Toast extends Vue {
    @Prop(Boolean) autoClose = true;
    @Prop(Number) autoCloseDelay = 5;

    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    }

    close() {
      this.$el.remove(); //把元素从页面上拿下来
      this.$destroy();

    }

  }
</script>

<style scoped lang="scss">
	$font-size: 14px;
	$toast-height: 40px;
	$toast-bg: rgba(0, 0, 0, 0.75);
	.toast {
		z-index: 21;
		font-size: $font-size;
		height: $toast-height;
		line-height: 1.8;
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		color: white;
		align-items: center;
		background: $toast-bg;
		border-radius: 4px;
		box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
		padding: 0 16px;
	}
</style>