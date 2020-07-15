<template >
	<div class="tab-body">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class TabBody extends Vue {

  }
</script>

<style scoped lang="scss">
.tab-body{

}
</style>