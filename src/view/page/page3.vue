<template>
  <div class="page-box">
    <div class="header-box">我的资料</div>
    <div class="userinfo-box">
      <div class="block-center"><el-avatar style="height:2rem;width:2rem;" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar></div>
      <div class="block-center2">{{user.name}}</div>
    </div>
    <div class="userinfo-box2">{{user.phone}}</div>
    <div class="userinfo-box2">{{user.role == 0 ? '普通用户' : '管理员'}}</div>
    <div class="userinfo-box2" @click="goToPage('/page5')">修改密码
    </div>
    <div class="userinfo-box2" @click="exitToLogin">退出登录
      <i class="iconfont icontuichu1" style="font-size:0.4rem;"></i>
    </div>
    <navMenu :tabIndex="2"></navMenu>
  </div>
</template>

<script>
import navMenu from "../../components/navMenu";
import { cookieData, localData } from "@/util/local";

export default {
  components: {
    navMenu,
  },
  data(){
    return {
      user:localData("get", "userinfo"),
    }
  },
  methods:{
    exitToLogin(){
      cookieData('clean','token')
      localData('clean',"userinfo")
      this.$router.push({ path: "/login"});
    },
    goToPage(path){
      this.$router.push({ path: path});
    }
  }
};
</script>

<style>
.page-box {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.header-box {
  width: 100%;
  height: 1.2rem;
  background-color: #606266;
  text-align: center;
  font: bold;
  font-size: 0.5rem;
  line-height: 1.2rem;
  color: #ffffff;
}
.userinfo-box {
  width: 100%;
  height: 5rem;
  background-color: #606266cb;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
.userinfo-box2 {
  width: 100%;
  height: 1rem;
  border-bottom: 2px solid #606266cb;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  text-align: center;
  color: #606266;
  font-size: 0.5rem;
  height: 0.8rem;
  margin: 1rem 0;
}
.block-center{
  display: flex;
  justify-content: center;
  padding: 1rem 0 0.5rem 0;
}
.block-center2{
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-size: 0.6rem;
}
</style>