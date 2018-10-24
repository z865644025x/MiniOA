<template>
	<div id="header">
		<div id="title" class="pull-left">MINI-OA</div>
		<div class="function-icons pull-left">
			<el-button size="small" type="info" icon="el-icon-edit" circle></el-button>
      <el-button size="small" type="info" icon="el-icon-edit" circle></el-button>
      <el-button size="small" type="info" icon="el-icon-edit" circle></el-button>
		</div>
    <div class="user-info pull-right">
      <div class="user-icon pull-left"><img src="../assets/images/user.jpg" alt="用户头像"></div>
      <div class="user-name pull-left">UserInfo</div>
    </div>
    <div class="clearfix"></div>
	</div>
</template>
<style scoped lang="scss">
	#header{
    height: 60px;
		padding: 0 20px;
		background-color:#545c64;
		#title{
			color:#FFFFFF;
			font-size:18px;
			width: 195px;
			height:60px;
			line-height: 60px;
		}
		.function-icons{
			height: 60px;
			line-height:60px;
    }
    .user-info{
      height:60px;
      .user-icon{
        height: 60px;
        margin: auto;
        img{
          width: 40px;
          height: 40px;
          margin-top: 10px;
          border-radius: 20px;
        }
      }
      .user-name{
        line-height: 60px;
        width: 100px;
        text-align: center;
        color: #FFFFFF;
      }
    }
	}
</style>
