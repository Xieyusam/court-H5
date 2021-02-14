<template>
  <div class="NavMenu">
    <div
      @click="changNav(0)"
      class="nav-child"
      :class="tabIndex == 0 ? 'nav-child-active' : ''"
    >
      <i class="iconfont iconzuqiuchang"></i>
      球场
    </div>
    <div
      @click="changNav(1)"
      class="nav-child"
      :class="tabIndex == 1 ? 'nav-child-active' : ''"
    >
      <i class="iconfont iconyonghu1"></i>
      记录
    </div>
    <div
      @click="changNav(2)"
      class="nav-child"
      :class="tabIndex == 2 ? 'nav-child-active' : ''"
    >
      <i class="iconfont iconyonghu2"></i>
      我的
    </div>
  </div>
</template>

<script>
export default {
  name: "menubox",
  props: {
    tabIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
    //   tabIndex: 0,
    };
  },
  methods: {
    goToPage(index) {
      this.$router.push({ path: "/page" + index });
    },
    changNav(index) {
    //   this.tabIndex = index;
        index++
        if(index==1){
            this.$router.push({ path: "/" })
            return
        }
        this.goToPage(index)
    },
  },
};
</script>

<style>
.NavMenu {
  height: 1.4rem;
  width: 100%;
  background-color: #606266;
  position: absolute;
  bottom: 0;
  padding-bottom: 0.2rem;
  padding-top: 0.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}
.nav-child {
  font-size: 0.3rem;
  height: 1.4rem;
  width: 1.4rem;
  color: #ffffff;
  background-color: transparent;
  display: flex;
  border-radius: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* justify-content: space-around; */
}
.nav-child-active {
  background-color: #9b9b9b;
}
.nav-child i {
  font-size: 0.8rem;
}
</style>