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
    <span class="sytitle">账号管理</span>
    </div>
    <!-- 表格 -->
    <el-table
    :data="tableData"
    style="width=100%">
    <el-table-column
      label="用户名称"
      width="320">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="用户组"
      width="320">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="管理">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit">编辑</i></el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete">删除</i></el-button>
      </template>
    </el-table-column>
  </el-table>
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }]
      }
    },
  //注册组件
  components: {
    LeftMenu,
   RightBttom,
    RightTop
  },
  
   
      methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
};
</script>
<style scoped>

</style>

