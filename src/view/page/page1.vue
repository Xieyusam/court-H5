<template>
  <div class="page-box">
    <div class="header-box">所有球场

    </div>
    <navMenu :tabIndex="0"></navMenu>
  </div>
</template>

<script>
import navMenu from "../../components/navMenu" 
export default {
components:{
  navMenu
}
}
</script>

<style>
.page-box{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.header-box{
  width: 100%;
  height: 1.2rem;
  background-color: #606266;
  text-align: center;
  font:bold;
  font-size: 0.5rem;
  line-height: 1.2rem;
  color: #ffffff;
}
</style>