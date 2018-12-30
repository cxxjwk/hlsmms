<template>
<el-container id="userpswcag">
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
    <span class="sytitle">修改账号密码</span>
    </div>

     <div class="text item">
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="新密码" prop="newpass">
    <el-input type="password" v-model="ruleForm2.newpass" autocomplete="off"></el-input>
  </el-form-item>
   <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button class="loginbtn" type="primary" @click="submitForm('ruleForm2')">修改</el-button>
    
  </el-form-item>
  
</el-form>
</div>

  
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
  name: 'useradd',
  data(){
     var validatePass2 = (rule, value, callback) => {
         if (value !== this.ruleForm2.newpass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validatePass3 = (rule, value, callback) => {
         if (value == this.ruleForm2.pass) {
          callback(new Error('新旧密码不能一样'));
        } else {
          callback();
        }
      };
      
    return{
       
        ruleForm2: {
          pass: '',
          newpass:"",
          checkPass:"",
         
        },

        rules2: {
          
          pass: [
              { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 1个字符', trigger: 'blur' }

          ],
          newpass: [
              { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 1个字符', trigger: 'blur' },
             { validator: validatePass3, trigger: 'blur' },
  
          ],
          checkPass: [
              { required: true, message: '确认密码不能为空', trigger: 'blur' },
              //调用上面的方法
              { validator: validatePass2, trigger: 'blur' }
          ],
        }
        ,
    }
  },
  
  //注册组件
  components: {
    LeftMenu,
   RightBttom,
    RightTop
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
};
</script>
<style scoped>

</style>

