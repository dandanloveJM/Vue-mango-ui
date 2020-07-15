<template>
	<div class="tab-item" @click="xxx" :class="classes">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject, Prop} from 'vue-property-decorator';

  @Component
  export default class TabItem extends Vue {
    @Inject() eventbus!: Vue;
    @Prop(String) name: string | undefined;
    @Prop(Boolean) disabled = false;
    active = false;

    get classes() {
      return {
        active: this.active
      };
    }

    created() {
      this.eventbus.$on('update:selected', (name: string) => {
        this.active = name === this.name;
      });
    }

    xxx() {
      this.eventbus.$emit('update:selected', this.name);
    }
  }
</script>

<style scoped lang="scss">
	.tab-item {
		flex-shrink: 0;
		padding: 0 1em;

		&.active {
			background: red;
		}
	}
</style>