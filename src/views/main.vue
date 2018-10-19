<template>
	<div id="main">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
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
    },
    methods:{
			getUserInfo(){
        this.http.post("/api/security/info")
        .then(response => {
          if(response.status == 200){
            console.log(response);
          }
          else{
            this.$router.replace("/login");
          }
        })
        .catch(error => {
          console.log(error)
        })
      },
		}
	}
</script>
<style>

</style>