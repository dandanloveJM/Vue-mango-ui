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
      console.log(this.$el.children);
      for(const node of this.$el.children) {
        if(node.nodeName.toLowerCase() !== 'button') {
          console.warn(`g-button-group的子元素应该全是g-button, 但你写的是${node.nodeName} `)
				}
			}
    }
  }
</script>

<style scoped lang="scss">
	@import "~@/assets/style/button.scss";

	.g-button-group {
		vertical-align: middle;

		> .g-button {
			border-radius: 0;
			margin-left: -1px;

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