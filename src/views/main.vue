<template>
	<div id="main">
    <el-container>
      <el-header>
				<app-header></app-header>
      </el-header>
      <el-container>
        <el-scrollbar>
          <el-aside width="215px">
            <el-menu router :default-active="$route.path" background-color="#545c64" text-color="#fff" class="el-menu-demo" active-text-color="#ffd04b">
              <template v-for="item in $router.options.routes">
                <el-menu-item v-if="!item.children && item.name != '登录页'" :index="item.path" :key="item.path" >  
                  {{item.name}}
                </el-menu-item>
                <el-menu-item v-else-if="item.name == '首页'" :index="item.redirect" :key="item.redirect" >  
                  {{item.name}}
                </el-menu-item>
                <el-submenu v-else-if="item.name != '登录页'" :index="item.path" :key="item.path">
                  <template slot="title">{{ item.name }}</template>
                  <el-menu-item v-for="child in item.children" :index="item.path + '/' + child.path" :key="item.path + '/' + child.path">{{ child.name }}</el-menu-item>
                </el-submenu>
              </template>
            </el-menu>
          </el-aside>
        </el-scrollbar>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
	</div>
</template>
<script>
	// 引入公共头部组件
	import appHeader from "../components/header.vue";
	export default {
		// 生命公共头部组件
		components:{
			appHeader
		},
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
        // this.http.post('/api/security/info')
				this.http.post('https://easy-mock.com/mock/5bae2935346f071866acba7f/oa/user')
				.then(response => {
					if(response.status == 200){
            let resources = response.data.data.resources;
            console.log(resources);
					}
					else{
						// this.$router.replace('/login');
					}
				})
				.catch(error => {
					console.log(error)
				})
			},
			test(){
				console.log(this.$router.options.routes);
			}
		}
	}
</script>
<style scoped lang="scss">
  #main{
    height: 100%;
    .el-container{
      height: 100%;
			.el-header{
				padding: 0;
			}
      .el-menu{
        height:100%;
        border-right:none;
      }
      .el-main{
        background-color: #FFFFFF;
      }
      .el-aside{
        height:100%;
      }
    }
  }
</style>