<template>
  <div class="page-box">
    <div class="header-box">
      <i @click="back" class="el-icon-arrow-left back"></i>修改密码
    </div>

    <div class="pwd-box">
      新密码:
      <el-input v-model="password1" show-password></el-input>
      再次确认:
      <el-input v-model="password2" show-password></el-input>
      <el-button style="margin-top:0.6rem;" @click="setNewPassword(password1, password2)" type="success"
        >确认修改</el-button
      >
    </div>
  </div>
</template>

<script>
import { newPassword } from "@/api/user";
import {cookieData, localData } from "@/util/local";

export default {
  data() {
    return {
      user: localData("get", "userinfo"),
      password1: "",
      password2: "",
    };
  },
  filters: {},
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    exitToLogin() {
      cookieData("clean", "token");
      localData("clean", "userinfo");
      this.$router.push({ path: "/login" });
    },
    setNewPassword(password1, password2) {
      if (!password1) {
        this.$toast({
          message: "密码不能为空",
          position: "center",
          duration: 800,
        });
        return;
      }
      if (!password2) {
        this.$toast({
          message: "请确认密码",
          position: "center",
          duration: 800,
        });
        return;
      }
      if (password1 != password2) {
        this.$toast({
          message: "两次输入的密码不一致",
          position: "center",
          duration: 800,
        });
        return;
      }

      const parem = {
        id: this.user.id,
        password: password1,
      };
      newPassword(parem)
        .then((res) => {
          if (res.code == 200) {
            this.$toast({
              message: "修改成功，重新登录",
              position: "center",
              duration: 800,
            });
            this.exitToLogin();
          }
        })
        .catch(err => {
          this.$toast({
            message: "修改失败",
            position: "center",
            duration: 800,
          });
        });
    },
  },
};
</script>

<style scoped>
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
.back {
  position: absolute;
  left: 0.3rem;
  top: 0.3rem;
}
.pwd-box {
  margin-top: 14vh;
  font-size: 0.6rem;
  padding: 0 0.6rem;
}
</style>
