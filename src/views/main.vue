<template>
	<div id="main">
    <el-container>
      <el-header><app-header :name='this.username'></app-header></el-header>
      <el-container>
        <app-sidebar :menuList='this.resources'></app-sidebar>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
	</div>
</template>
<script>
	// 引入公共头部组件
	import appHeader from "../components/header";
  import appSidebar from "../components/sidebar";
	export default {
		// 生命公共头部组件
		components:{
			appHeader,
      appSidebar
		},
		data(){
			return {
        username:'',
        resources:[],
			}
    },
		mounted() {
			this.getUserInfo();
			this.test();
    },
    methods:{
      // userInfo
			getUserInfo(){
        this.http.post('/api/security/info')
				.then(res => {
					if(res.status == 200){
            let data = res.data.data;
            this.$store.dispatch('setMenuList',data.resources);
            this.resources = this.$store.getters.getMenuList;
            console.log(this.resources);
            this.username = data.user.userName;
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
      .el-main{
        background-color: #FFFFFF;
      }
      .el-aside{
        height:100%;
      }
    }
  }
</style>