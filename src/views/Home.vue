<template>
	<div class="home">
		<m-button icon="down" :loading="isLoading" @click="isLoading = !isLoading">
			按钮1
		</m-button>

		<m-button icon="down" :loading="isLoading2" @click="isLoading2 = !isLoading2">
			按钮2
		</m-button>
		<m-button icon="down" icon-position="right"
							:loading="isLoading3"
							@click="isLoading3 = !isLoading3">
			按钮3
		</m-button>

		<m-button-group>
			<m-button icon="left">上一页</m-button>
			<m-button>更多</m-button>
			<m-button icon="right" icon-position="right">下一页</m-button>
		</m-button-group>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
    isLoading = false;
    isLoading2 = true;
    isLoading3 = true;

  }
</script>
