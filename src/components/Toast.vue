<template>
	<div class="toast" ref="wrapper">
		<div class="message">
			<slot v-if="!enableHtml"></slot>
			<div v-else v-html="$slots.default[0]"></div>
		</div>
		<div class="line" ref="line"></div>
		<span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';

  @Component
  export default class Toast extends Vue {
    @Prop(Boolean) autoClose = true;
    @Prop(Number) autoCloseDelay = 50;
    @Prop(Boolean) enableHtml = false;

    //default值 如果是Object或者数组，必须用函数返回，不能直接写Object或数组
    @Prop(Object) closeButton = {
      text: '关闭', callback: (toast: Toast) => console.log('close')
    };

    mounted(){
      this.updateStyles()
			this.execAutoClose()
		}

		updateStyles(){
      this.$nextTick(() => {
        //@ts-ignore
        this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
		}

		execAutoClose(){
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

    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this);//this === toast实例
      }
    }

  }
</script>

<style scoped lang="scss">
	$font-size: 14px;
	$toast-min-height: 40px;
	$toast-bg: rgba(0, 0, 0, 0.75);
	.toast {
		z-index: 21;
		font-size: $font-size;
		min-height: $toast-min-height;
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

		.message {
			padding: 8px;
		}
		.close {
			padding-left: 16px;
			flex-shrink: 0;
		}
		.line {
			height: 100%;
			border-left: 1px solid #666;
			margin-left: 16px;
		}
	}
</style>