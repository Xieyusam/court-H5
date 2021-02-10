<template>
  <div id="mainpage">

    <router-view/>

  </div>
</template>

<script>
import menubox from '@/components/menubox'
export default {
  name: "mainpage",
  components:{
    menubox
  },
  data() {
    return {};
  },
};
</script>

<style>
#mainpage {
  /* background-color: #94faf534; */
  height: 100vh;
  width: 100vw;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
  /* height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
  /* line-height: 160px; */
}
.containerbox {
  height: calc(100vh - 60px);
}
</style>
