<template>
	<div class="home">
		<m-button icon="down" :loading="isLoading" @click="isLoading = !isLoading">
			按钮1
		</m-button>

		<m-button icon="down" :loading="isLoading2" @click="isLoading2 = !isLoading2">
			按钮2
		</m-button>
		<m-button icon="down" icon-position="right">
			按钮3
		</m-button>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
    isLoading = false;
    isLoading2 = true;

  }
</script>
