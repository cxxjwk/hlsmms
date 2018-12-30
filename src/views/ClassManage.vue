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
    <span class="sytitle">分类管理</span>
    </div>
       <el-table
    :data="tableData"
    style="width: 100%">
  
    <el-table-column
      label="姓名"
      width="400">
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
          @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
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
          name: '日用品',
        }, 
        {
          name: '|_舒肤佳1',
        },
         {
          name: '|_舒肤佳2',
        },
         {
          name: '食品',
        },
         {
          name: '优乐美',
        },
         {
          name: '烟酒',
        },
        ]
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

