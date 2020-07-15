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


		<div>
			<m-row gutter="20">
				<m-col span="4" offset="2" :phone="{span:12, offset:4}">1</m-col>
				<m-col span="20" offset="2" :phone="{span:12, offset:4}">2</m-col>
			</m-row>
		</div>

		<m-row>
			<m-col span="24" :ipad="{span:12}" :narrowPc="{span:8}">
				<div class="demo">demo</div>
			</m-col>
			<m-col span="24" :ipad="{span:12}" :narrowPc="{span:8}">
				<div class="demo">demo</div>
			</m-col>
			<m-col span="24" :ipad="{span:12}" :narrowPc="{span:8}">
				<div class="demo">demo</div>
			</m-col>
			<m-col span="24" :ipad="{span:12}" :narrowPc="{span:8}">
				<div class="demo">demo</div>
			</m-col>
			<m-col span="24" :ipad="{span:12}" :narrowPc="{span:8}">
				<div class="demo">demo</div>
			</m-col>

		</m-row>

<!--		<m-row>-->
<!--			<m-col span="2" offset="4">1</m-col>-->
<!--			<m-col span="10" offset="4">2</m-col>-->
<!--			<m-col span="4">3</m-col>-->
<!--		</m-row>-->
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

  }
</script>

<style lang="scss">
	.demo {
		height: 100px;
	}
</style>