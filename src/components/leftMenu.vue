<template>
     <!-- 左侧 -->
  <el-aside width="230px">
    <div class="lefttitle">
    <h3>华联超市管理系统</h3>
    <p>您好 adimin</p>
    <p>管理首页 | 退出系统</p>
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      >
      <!-- 第一个 -->
      <el-submenu index="1" class="bcgreen mt20">
        <template slot="title">
          
          <span>分类管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/classadd"> <router-link to="/classadd"> 添加管理</router-link></el-menu-item>
          <el-menu-item index="/classmanage"><router-link to="/classmanage"> 分类管理</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 第二个 -->
      <el-submenu index="2" class="bcgreen mt20">
        <template slot="title">
         
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/productmanage"><router-link to="/productmanage">商品管理</router-link></el-menu-item>
          <el-menu-item index="1-2">商品添加</el-menu-item>
           
        </el-menu-item-group>
      </el-submenu>
      <!-- 第三个 -->
      <el-submenu index="3" class="bcgreen mt20">
        <template slot="title">
          
          <span>进货管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4" class="bcgreen mt20">
        <template slot="title">
          <span>出货管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="5" class="bcgreen mt20">
        <template slot="title">
          <span>统计管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="6" class="bcgreen mt20">
        <template slot="title">
          <span>账号管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/userlist"><router-link to="/userlist">用户列表</router-link></el-menu-item>
        <el-menu-item index="/useradd"><router-link to="/useradd">添加用户</router-link></el-menu-item>
           <el-menu-item index="/userpswcag"><router-link to="/userpswcag">修改密码</router-link></el-menu-item>
           
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="7" class="bcgreen mt20">
        <template slot="title">
          <span>会员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
           <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
       <el-submenu index="8" class="bcgreen mt20">
        <template slot="title">
          <span><router-link to="/">系统管理</router-link></span>
          
        </template>
        
      </el-submenu>
      </el-menu>
      </el-aside>

</template>


<script>
export default {
    data(){
       return{
         isOpened:true
         } 
}
}
</script>


<style>

</style>
