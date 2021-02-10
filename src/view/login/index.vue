<template>
  <div id="login">
    <div class="login-box">
      <div class="input-line">UserName</div>
      <div class="input-line">
        <input type="text" v-model="username">
      </div>
      <div class="input-line">用户名</div>
      <div class="input-line">
        <input type="text" v-model="password">
      </div>
      <div class="input-line">
        <div @click="doLogin">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  cookieData
} from "@/util/local";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      isRegister: false,
    };
  },
  methods:{
    doLogin(){
      cookieData("set", "token","123")
      this.$router.push({path:"/"})
    }
  }
};
</script>

<style>
#login {
  background-color: #94faf534;
  height: 100vh;
  width: 100vw;
  text-align: center;
  overflow: hidden;
}
.login-box{
  font-size: 0.6rem;
  margin-top: 30vh;
  /* width: 100%; */
  padding: 0 1rem;
}
.input-line{
  width: 100%;
  text-align: left;
  margin: 0.2rem 0;
}
.input-line input{
  /* width: 100%; */
  height: 1rem;
  /* border-radius: 50em; */
  outline:none;
  font-size: 0.6rem;
  padding: 0 0.4rem;
}

</style>
