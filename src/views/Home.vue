<template>
	<div class="home">
		<Icon2 name="good"></Icon2>
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

		<h3>把一行分成2份</h3>
		<m-row>
			<m-col>
				<div>col1</div>
			</m-col>
			<m-col>
				<div>col2</div>
			</m-col>
		</m-row>

		<h3>把一行分成3分</h3>
		<m-row>
			<m-col>col1</m-col>
			<m-col>col2</m-col>
			<m-col>col3</m-col>
		</m-row>

		<h3>随意指定offset</h3>
		<m-row>
			<m-col span="4">col1</m-col>
			<m-col span="18" offset="2">col2</m-col>
		</m-row>

		<h3>gutter</h3>
		<div>
			<m-row gutter="20">
				<m-col>1</m-col>
				<m-col>2</m-col>
			</m-row>
		</div>

		<h3>gutter 四份</h3>
		<div>
			<m-row gutter="20">
				<m-col>1</m-col>
				<m-col>2</m-col>
				<m-col>3</m-col>
				<m-col>4</m-col>
			</m-row>
		</div>

		<h3>响应式</h3>
		<m-row :isResponsive="true">
			<m-col span="24" :ipad="{span:12}" :narrowPc="{span:8}" :pc="{span:4}">
				<div class="demo">col1</div>
			</m-col>
			<m-col span="24" :ipad="{span:12}" :narrowPc="{span:8}" :pc="{span:4}">
				<div class="demo">col2</div>
			</m-col>
			<m-col span="24" :ipad="{span:12}" :narrowPc="{span:8}" :pc="{span:4}">
				<div class="demo">col3</div>
			</m-col>
			<m-col span="24" :ipad="{span:12}" :narrowPc="{span:8}" :pc="{span:4}">
				<div class="demo">col4</div>
			</m-col>
			<m-col span="24" :ipad="{span:12}" :narrowPc="{span:8}" :pc="{span:4}">
				<div class="demo">col5</div>
			</m-col>
			<m-col span="24" :ipad="{span:12}" :narrowPc="{span:8}" :pc="{span:4}">
				<div class="demo">col6</div>
			</m-col>

		</m-row>

		<!--		<m-row>-->
		<!--			<m-col span="2" offset="4">1</m-col>-->
		<!--			<m-col span="10" offset="4">2</m-col>-->
		<!--			<m-col span="4">3</m-col>-->
		<!--		</m-row>-->

		<button @click="showToast">点我</button>
	</div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Icon2 from '@/components/Icon2.vue';

  @Component({
    components: {Icon2}
  })
  export default class Home extends Vue {
    isLoading = false;
    isLoading2 = true;
    isLoading3 = true;

// ex1
    showToast() {
      this.$toast('很长很长很长很长很长长很长很长很长很长长很长很长很长很长长很长很长很长很长长很长很长很长很长长很长很长很长很长', {
        autoClose: false,
      });
    }


  }


</script>

<style lang="scss">
</style>