<template>
	<div class="g-button-group">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class ButtonGroup extends Vue {
		mounted(){
      //this.$el.children 取到当前元素的children
      for(const node of this.$el.children) {
        if(node.nodeName.toLowerCase() !== 'button') {
          console.warn(`g-button-group的子元素应该全是g-button, 但你写的是${node.nodeName} `)
				}
			}
    }
  }
</script>

<style scoped lang="scss">
	$font-size: 14px;
	$button-height: 32px;
	$border-radius: 4px;
	$border-color: #999;
	$button-bg: white;
	$border-color-hover: #666;
	$button-active-bg: #eee;


	.g-button-group {
		vertical-align: middle;

		> .g-button {
			border-radius: 0;


			&:not(:first-child) {
				margin-left: -1px;
			}

			&:first-child {
				border-top-left-radius: $border-radius;
				border-bottom-left-radius: $border-radius;
			}

			&:last-child {
				border-top-right-radius: $border-radius;
				border-bottom-right-radius: $border-radius;
			}

			&:hover {
				position: relative;
				z-index: 1;
			}
		}
	}

</style>