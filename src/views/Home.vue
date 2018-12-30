<template>
<el-container id="home">
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
    <span class="sytitle">系统信息</span>
    </div>

  <el-alert
    title="商品总数"
    type="success"
    show-icon>
  </el-alert>
  <el-alert
    title="输入数据"
    type="info"
    show-icon>
  </el-alert>

  <el-row :gutter="20" >
  <el-col :span="12"><div class="grid-content bg-purple">

    <el-card class="box-card">
    <div slot="header" class="clearfix">
    <span class="sytitle">销售排行</span>
    </div>
    <el-table
      :data="tableData"
      style="width:auto">
      <el-table-column
        prop="goodsname"
        label="商品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sale"
        label="销售"
        width="180">
      </el-table-column>
    </el-table>
    </el-card>

  </div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light mt10">
     <el-card class="box-card">
    <div slot="header" class="clearfix">
    <span class="sytitle">缺货商品</span>
    </div>
    <el-table
      :data="table2Data"
      style="width:auto">
      <el-table-column
        prop="goodsname"
        label="商品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="inventory"
        label="库存"
        width="180">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作"
        width="180">
      </el-table-column>
    </el-table>
    </el-card>

    </div></el-col>
  </el-row>
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
  data(){
    return{
     tableData:[{
       goodsname:"海飞丝",
       sale:20
     }, {goodsname:"海飞丝",
       sale:20}, {goodsname:"海飞丝",
       sale:20}, {goodsname:"海飞丝",
       sale:20}, {goodsname:"海飞丝",
       sale:20}] ,
       table2Data:[{
       goodsname:"飞丝",
       inventory:20,
       operation:"入库"
     },{
       goodsname:"飞丝2",
       inventory:20,
       operation:"入库"}] 

    }
  },
  //注册组件
  components: {
    LeftMenu,
   RightBttom,
    RightTop
  },
  
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    
  }
};
</script>
<style scoped>

</style>

