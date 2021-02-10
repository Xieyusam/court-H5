<template>
  <div>
    <el-menu
      default-active="1"
      background-color="#d3dce6"
      text-color="#eeeeee"
      active-text-color="#000000"
      @select="goToPage"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">page2</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">page3</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    name:'menubox',
    data(){
      return{
      }
    },
    methods:{
      goToPage(index) {
        // this.$message({
        //   showClose: true,
        //   message: '恭喜你，这是一条成功消息',
        //   type: 'success'
        // });
        this.$router.push({path:'/page'+index})
      }
    }
};
</script>

<style>
</style>