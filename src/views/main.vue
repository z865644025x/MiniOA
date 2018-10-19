<template>
	<div id="main">
		<h1>Hello , This is First VueModel!</h1>
		<!-- <el-button @click="login">登录</el-button> -->
		<el-button @click="getCookie()">获取cookie</el-button>		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				userName:'',
				userPwd:''
			}
		},
		mounted() {
			// this.getCookie();
		},
		methods:{
			// getCookie:function () {
			// 	if (document.cookie.length>0) {
			// 		var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
			// 		console.log(arr);
			// 		for(var i=0;i<arr.length;i++){
			// 			var arr2=arr[i].split('=');//再次切割
			// 			//判断查找相对应的值
			// 			if(arr2[0]=='userName'){
			// 				this.userName=arr2[1];//保存到保存数据的地方
			// 			}else if(arr2[0]=='userPwd'){
			// 				this.password=arr2[1];
			// 			}
			// 		}
			// 		if(!this.userName && !this.userPwd){
			// 			this.$router.replace('/login');
			// 		}
			// 	}
      //   else{
      //     this.$router.replace('/login');
      //   }
			// },
			login(){
				this.$router.replace('/login')
			}
		}
	}
</script>
<style>

</style>