<template>
	<div class="col" :class="colClass" :style="colStyle">
		<div style="border: 1px solid green;">
			<slot></slot>
		</div>

	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Col extends Vue {
    @Prop([Number, String]) span: number | string | undefined;
    @Prop([Number, String]) offset: number | string | undefined;

    gutter = 0;

    get colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'
      };
    }

    get colClass() {
      return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`];
    }

  }
</script>

<style scoped lang="scss">
	.col {
		height: 100px;

		width: 50%;
		border: 1px solid red;

		$class-prefix: col-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				width: ($n / 24) * 100%;
			}
		}

		$class-prefix: offset-;
		@for $n from 1 through 24 {
			&.#{$class-prefix}#{$n} {
				margin-left: ($n / 24) * 100%;
			}
		}


	}
</style>