<template>
  <div>
    <el-scrollbar>
      <el-aside width="200px">
        <el-menu 
          background-color="#545c64" 
          text-color="#fff" 
          class="el-menu-demo" 
          active-text-color="#ffd04b"
          @select="handleSelect">
          <!-- :default-active="$route.path"  -->
          <!-- router -->
          <!-- <template v-for="item in $router.options.routes">
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
          </template> -->


          <template v-for="item in menuList">
            <el-menu-item :index="item.url" :key="item.url" >  
              {{item.name}}
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
    </el-scrollbar>
  </div>
</template>
<script>
  export default {

    props: [ 'menuList' ],

    data () {
      return {
        
      }
    },
    methods:{
      handleSelect(key){
        console.log(key);
        this.$router.replace(key);
      }
    }
  }
</script>
<style scoped lang="scss">
.el-menu{
  border-right: none;
}
</style>