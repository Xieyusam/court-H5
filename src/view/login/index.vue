<template>
  <div id="login">
    <div class="login-box">
      <div class="input-line" style="font-size: 1rem; margin-bottom: 12vh">
        Welcome to CourtSystem
      </div>
      <div v-if="!isRegister">
        <div class="input-line">UserPhone</div>
        <div class="input-line">
          <el-input v-model="phone"></el-input>
        </div>
        <div class="input-line">password</div>
        <div class="input-line">
          <el-input show-password v-model="password"></el-input>
        </div>
        <div class="input-line" style="margin-top: 2vh">
          <!-- <div @click="doLogin">登录</div> -->
          <el-button @click="isRegister = true" type="primary"
            >Register</el-button
          >
          <el-button @click="LoginByPhone" type="success">Login In</el-button>
        </div>
      </div>
      <div v-if="isRegister">
        <div class="input-line">UserName</div>
        <div class="input-line">
          <el-input v-model="Rusername"></el-input>
        </div>
        <div class="input-line">UserPhone</div>
        <div class="input-line">
          <el-input v-model="Rphone"></el-input>
        </div>
        <div class="input-line">password</div>
        <div class="input-line">
          <el-input show-password v-model="Rpassword"></el-input>
        </div>
        <div class="input-line" style="margin-top: 2vh">
          <!-- <div @click="doLogin">登录</div> -->
          <el-button @click="isRegister = false" type="primary"
            >Return</el-button
          >
          <el-button @click="Register" type="success">Confirm</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cookieData, localData } from "@/util/local";
import { UserLogin, UserRegister } from "@/api/user";
export default {
  name: "login",
  data() {
    return {
      Rusername: "",
      password: "",
      phone: "",
      Rphone: "",
      Rpassword: "",
      isRegister: false,
    };
  },
  methods: {
    LoginByPhone() {
      if (!this.phone) {
        this.$toast({
          message: "请填写登录手机",
          position: "center",
          duration: 800,
        });
        return;
      }
      if (!this.password) {
        this.$toast({
          message: "请填写登录密码",
          position: "center",
          duration: 800,
        });
        return;
      }
      const parems = {
        phone: this.phone,
        password: this.password,
      };
      UserLogin(parems)
        .then((res) => {
          if (res.code == 200 && res.data.user.status == 0) {
            this.$toast({
              message: "登录成功",
              position: "center",
              duration: 800,
            });
            cookieData("set", "token", res.data.token, 1); // 将token 存在cookie,  1天后过期
            localData("set", "userinfo", res.data.user);
            this.$router.push({ path: "/" });
          } else {
            this.$toast({
              message: "该账号已停用",
              position: "center",
              duration: 800,
            });
          }
        })
        .catch((err) => {
          this.$toast({
            message: err.data,
            position: "center",
            duration: 800,
          });
        });
    },
    Register() {
      if (!this.Rusername) {
        this.$toast({
          message: "请填写用户名",
          position: "center",
          duration: 800,
        });
        return;
      }
      if (!this.Rphone) {
        this.$toast({
          message: "请填写登录手机",
          position: "center",
          duration: 800,
        });
        return;
      }
      if (!this.Rpassword) {
        this.$toast({
          message: "请填写登录密码",
          position: "center",
          duration: 800,
        });
        return;
      }
      const parems = {
        name: this.Rusername,
        password: this.Rpassword,
        phone: this.Rphone,
        role: 0,
      };
      UserRegister(parems)
        .then((res) => {
          if (res.code == 200) {
            this.$toast({
              message: "用户注册成功",
              position: "center",
              duration: 800,
            });
            this.isRegister = false;
          }
        })
        .catch((err) => {
          this.$toast({
            message: err.data.msg,
            position: "center",
            duration: 800,
          });
        });
    },
  },
};
</script>

<style>
#login {
  background-color: #606266;
  color: #ffffff;
  height: 100vh;
  width: 100vw;
  text-align: center;
  overflow: hidden;
}
.login-box {
  font-size: 0.6rem;
  margin-top: 4vh;
  /* width: 100%; */
  padding: 0 1rem;
}
.input-line {
  width: 100%;
  text-align: left;
  margin: 0.2rem 0;
}
.input-line input {
  /* width: 100%; */
  height: 1rem;
  /* border-radius: 50em; */
  outline: none;
  font-size: 0.6rem;
  padding: 0 0.4rem;
}
</style>
