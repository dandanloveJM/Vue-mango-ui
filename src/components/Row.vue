<template>
	<div class="row" :style="rowStyle" :class="rowClass">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Row extends Vue {
    @Prop([Number, String]) gutter!: number | string | undefined;
    @Prop({
      validator(value: string) { return ['left', 'right', 'center'].indexOf(value) >=0;}
    }) align: string | undefined;
    @Prop(Boolean) isResponsive: boolean | undefined;

    mounted() {
      this.$children.forEach((vm) => {
        if (this.gutter) {
          this.$nextTick(() => {
            vm.$data.gutter = this.gutter;
          })

        }
      });
    }

    get rowStyle() {
      if (this.gutter) { // 如果gutter值不是undefined
        return {marginLeft: -this.gutter / 2 + 'px', marginRight: -this.gutter / 2 + 'px'};
      }
      return '';
    }

    get rowClass() {
      const {align, isResponsive} = this;
      return [align && `align-${align}`, isResponsive && `responsive`];
    }

  }
</script>

<style scoped lang="scss">
	.row {
		display: flex;
		flex-wrap: nowrap;

		&.responsive {
			flex-wrap: wrap;
		}

		&.align-left {
			justify-content: flex-start;
		}

		&.align-right {
			justify-content: flex-end;
		}

		&.align-center {
			justify-content: center;
		}


	}
</style>