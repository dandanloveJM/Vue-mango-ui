<template>
	<div class="tab-pane" :class="classes" v-if="active">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject, Prop} from 'vue-property-decorator';

  @Component
  export default class TabPane extends Vue {
    @Inject() eventbus!: Vue;
    @Prop(String) name: string | undefined;
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
  }
</script>

<style scoped lang="scss">
	.tab-pane {
		&.active {
			background: red;
		}
	}
</style>