<template>
	<div id="main">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="203px">
					<el-menu router :default-active="$route.path" background-color="#545c64" text-color="#fff" class="el-menu-demo" active-text-color="#ffd04b">
						<template v-for="item in $router.options.routes">
							<el-menu-item v-if="!item.children || item.children.length == 1" :index="item.path" :key="item.path" >  
								{{item.name}}
							</el-menu-item>
							<el-submenu v-else :index="item.path" :key="item.path">
								<template slot="title">{{ item.name }}</template>
								<el-menu-item v-for="child in item.children" :index="item.path + '/' + child.path" :key="item.path + '/' + child.path">{{ child.name }}</el-menu-item>
							</el-submenu>
						</template>
					</el-menu>
				</el-aside>
        <el-main>
					<router-view></router-view>
				</el-main>
      </el-container>
    </el-container>
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
			this.getUserInfo();
			this.test();
    },
    methods:{
			getUserInfo(){
				this.http.post('https://easy-mock.com/mock/5bae2935346f071866acba7f/oa/user')
				.then(response => {
					if(response.status == 200){
						console.log(response.data);
						
					}
					else{
						this.$router.replace('/login');
					}
				})
				.catch(error => {
					console.log(error)
				})
			},
			test(){
				console.log('this is test');
			}
		}
	}
</script>
<style>

</style>