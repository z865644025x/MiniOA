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
							this.setCookie(this.form.userName,this.form.userPwd,3);
							this.$router.replace('/');
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
			},


			// 设置cookie
			setCookie(c_name,c_pwd,exdays) {
				var exdate=new Date();//获取时间
				exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
				//字符串拼接cookie
				window.document.cookie="userName"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
				window.document.cookie="userPwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
			},
			//读取cookie
			getCookie:function () {
				if (document.cookie.length>0) {
					var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
					for(var i=0;i<arr.length;i++){
						var arr2=arr[i].split('=');//再次切割
						//判断查找相对应的值
						if(arr2[0]=='userName'){
							this.ruleForm.userName=arr2[1];//保存到保存数据的地方
						}else if(arr2[0]=='userPwd'){
							this.ruleForm.password=arr2[1];
						}
					}
				}
			},
			//清除cookie
			clearCookie:function () {
				this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
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