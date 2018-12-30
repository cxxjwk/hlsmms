<template>
<div id="loginbox">
     <el-card class="box-card" id="login">
  <div slot="header" class="clearfix">
    <span>用户登录</span>
  </div>
  <div class="text item">
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号" prop="username">
    <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button class="loginbtn" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
    <el-button class="loginbtn" @click="resetForm('ruleForm2') ">重置</el-button>
  </el-form-item>
</el-form>
</div>
</el-card>
</div>
</template>
<script>
export default {
    data() {
      return {
        ruleForm2: {
          pass: '',
          username:"",
        },
        rules2: {
          username:[
              { required: true, message: '用户名不能为空', trigger: 'blur' },
              { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
          ],
          pass: [
              { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 1个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('成功');
            //location.href="/"
           this.$router.push("/")//实现跳转 在vue中使用
          } else {
            alert("验证失败");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style>
#loginbox{
  background-color: aqua;
}
  #login{
    width:500px;
    height:300px;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .loginbtn{
    width: 110px;
    height: 42px;
    color: white!important;
    margin: 0 30px!important;
    background: skyblue!important;
    border: none!important;
  }
</style>



