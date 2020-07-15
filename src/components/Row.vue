<template>
	<div class="row" :style="rowStyle">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Row extends Vue {
    @Prop([Number, String]) gutter!: number | string | undefined;


    mounted() {
      this.$children.forEach((vm) => {
        if(this.gutter) {
          vm.$data.gutter = this.gutter;
				}
      });
    }

    get rowStyle() {
      if(this.gutter) { // 如果gutter值不是undefined
        return {marginLeft: -this.gutter / 2 + 'px', marginRight: -this.gutter / 2 + 'px'};
			}
     return ''
    }

  }
</script>

<style scoped lang="scss">
	.row {
		display: flex;
	}
</style>