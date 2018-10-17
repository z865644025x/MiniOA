<template>
	<div id="main">
		<h1>Hello , This is First VueModel!</h1>
		<el-button @click="login">登录</el-button>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			getCookie(){
				
			},
			login(){
				this.$router.replace('/login')
			}
		}
	}
</script>
<style>

</style>