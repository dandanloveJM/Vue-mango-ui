<template>
	<div class="col" :class="colClass" :style="colStyle">
		<div>
			<slot></slot>
		</div>



	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  const validator = (value: Record<string, number | string>) => {
    const keys = Object.keys(value);
    let valid = true;
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false;
      }
    });
    return valid;
  };

  @Component
  export default class Col extends Vue {
    @Prop([Number, String]) span: number | string | undefined;
    @Prop([Number, String]) offset: number | string | undefined;
    @Prop({
      validator: validator
    }) phone: Record<string, number | string> | undefined;
    @Prop({validator: validator}) ipad: { span: string | number; offset: string | number } | undefined;
    @Prop({validator: validator}) narrowPc: { span: string | number; offset: string | number } | undefined;
    @Prop({validator: validator}) pc: { span: string | number; offset: string | number } | undefined;
    @Prop({validator: validator}) widePc: { span: string | number; offset: string | number } | undefined;


    gutter = 0;

    get colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'
      };
    }

    get colClass() {
      const {span, offset, ipad, narrowPc, pc, widePc, gutter} = this;
      const createClasses = this.createClasses;
      return [
        ...createClasses({span, offset}),
        ...createClasses(ipad, 'ipad-'),
        ...createClasses(narrowPc, 'narrow-pc-'),
        ...createClasses(pc, 'pc-'),
        ...createClasses(widePc, 'wide-pc-'),
				gutter && 'gutter'
      ];
    }

    createClasses(obj: { span: string | number | undefined; offset: string | number | undefined } | undefined,
                  str = '') {
      if (!obj) {return [];}
      const array = [];
      if (obj.span) { array.push(`col-${str}${obj.span}`); }
      if (obj.offset) { array.push(`offset-${str}${obj.offset}`); }
      return array;
    }

  }
</script>

<style scoped lang="scss">
	.col:nth-child(odd) {

		background: rgba(0, 160, 233, .7)
	}

	.col:nth-child(even) {
		background: #00a0e9
	}
	.col {
		height: 100px;
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 14px;

		&.gutter {
			background: white;

			> div {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-grow: 1;
				height: 100px;
				background: rgba(0, 160, 233, .7);
			}
		}



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

		@media (min-width: 577px) {
			$class-prefix: col-ipad-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n / 24) * 100%;
				}
			}
			$class-prefix: offset-ipad-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n / 24) * 100%;
				}
			}
		}
		@media (min-width: 769px) { // 770
			$class-prefix: col-narrow-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n / 24) * 100%;
				}
			}
			$class-prefix: offset-narrow-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n / 24) * 100%;
				}
			}
		}
		@media (min-width: 993px) {
			$class-prefix: col-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n / 24) * 100%;
				}
			}
			$class-prefix: offset-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n / 24) * 100%;
				}
			}
		}
		@media (min-width: 1201px) {
			$class-prefix: col-wide-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					width: ($n / 24) * 100%;
				}
			}
			$class-prefix: offset-wide-pc-;
			@for $n from 1 through 24 {
				&.#{$class-prefix}#{$n} {
					margin-left: ($n / 24) * 100%;
				}
			}
		}


	}
</style>