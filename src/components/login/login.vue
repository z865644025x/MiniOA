<template>
	<div id="login">
		<h1>Hello,This is Login</h1>
		<el-form ref="form" :model="form" :rules="rules" label-width="100px">
			<el-form-item label="用户名：" prop="userName">
				<el-input v-model="form.userName"></el-input>
			</el-form-item>
			<el-form-item label="密码：" prop="userPwd">
					<el-input v-model="form.userPwd"></el-input>
				</el-form-item>
		</el-form>
		<el-button @click="login('form')">登录</el-button>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				form:{
					userName:'',
					userPwd:''
				},
				rules:{
					userName:[
						{ required:true,message:"请输入用户名",trigger: 'blur' }
					],
					userPwd:[
						{ required:true,message:"请输入密码",trigger: 'blur' }
					]
				}
			}
		},
		methods:{
			login(form){
				this.$refs[form].validate((valid)=>{
					if(valid){
						this.$http.post('https://easy-mock.com/mock/5bae2935346f071866acba7f/oa/user')
						.then((response)=>{
							let data = response.data;
							console.log(data);
							console.log(response);
							// this.$router.replace('/');
						})
						.catch((error)=>{
							console.log('接口读取错误了');
						})
					}
					else{
						this.$notify({
							title: '警告',
							message: '请输入正确的用户名和密码！',
							type: 'warning'
						});
						return false;
					}
				})
			}
		}
	}
</script>
<style>
	#login{
		width: 50%;
		margin: 0 auto;
	}
</style>