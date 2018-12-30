<template>
<el-container id="userlist">
 <!-- 引入左侧leftmenu -->
 <LeftMenu></LeftMenu>
      <!-- 右 -->
  <el-container id="mainContent">
    <!-- 引入右侧顶部rihttop -->
    <RightTop></RightTop>
    <!-- 中间可变 -->
    <el-main>
     <el-card class="box-card">
    <div slot="header" class="clearfix">
    <span class="sytitle">添加管理</span>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :label-position="labelPosition">
    <el-form-item label="所属分类" prop="region">
    <el-select v-model="ruleForm.region" placeholder="----顶级分类----">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="分类名称" prop="classname">
    <el-input type="text" v-model="ruleForm.classname" autocomplete="off"></el-input>
  </el-form-item>

  <template>
    <p>状态</p>
  <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
</template>
   
  </el-form>
  
 <div id="mybox">添加</div>
    </el-card>
    
    </el-main>
    <!-- 引入右边下面内容 -->
    <RightBttom></RightBttom>
  </el-container>
</el-container>

</template>

<script>
//引入导航组件
import LeftMenu from"../components/leftMenu";
import RightBttom from"../components/rightBttom";
import RightTop from"../components/rightTop";


export default {
  name: 'home',
   data() {
      return {
         radio: '1',
        labelPosition: 'top',
        ruleForm: {
          region: '',
          username:""
        },
        rules:{
            region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ], 
         classname:[
              { required: true, message: '用户名不能为空', trigger: 'blur' },
              { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ],}
       
      }
    },
  //注册组件
  components: {
    LeftMenu,
   RightBttom,
    RightTop
  },
  
   
      methods: {
      
    }
};
</script>
<style scoped>

</style>

