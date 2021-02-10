<template>
  <div class="page-box">
    <div class="header-box">我的资料</div>
    <div class="userinfo-box"></div>
    <div class="userinfo-box2">13143101301</div>
    <div class="userinfo-box2">用户</div>    
    <div class="userinfo-box2">男</div>
    <navMenu :tabIndex="2"></navMenu>
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
.userinfo-box{
  width: 100%;
  height: 6rem;
  background-color: #606266cb;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
.userinfo-box2{
  width: 100%;
  height: 1rem;
  /* background-color: #606266cb; */
  border-bottom:2px solid #606266cb ;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  text-align: center;
  color: #606266;
  font-size: 0.5rem;
  height: 0.8rem;
  margin: 1rem 0;
}
</style>