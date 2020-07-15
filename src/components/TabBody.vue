<template >
	<div class="tab-body">
		<slot></slot>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Inject} from 'vue-property-decorator';

  @Component
  export default class TabBody extends Vue {
    @Inject() eventbus!: Vue;

    created(){
      console.log('爷爷给body的eventBus')
      console.log(this.eventbus)
    }
  }
</script>

<style scoped lang="scss">
.tab-body{

}
</style>