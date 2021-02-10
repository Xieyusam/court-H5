<template>
  <div class="page-box">
    <div class="header-box">订场记录</div>
    <div class="record-list">
      <div class="record-box">
        <div class="top-box">
          <div class="line">预订时间：666</div>
          <div class="line">预订场地：6号场</div>
          <div class="line">类型：羽毛球</div>
          <div class="line">预定人：xys 13143101301</div>
        </div>
        <div class="bottom-box">
          
        </div>
      </div>
    </div>
    <navMenu :tabIndex="1"></navMenu>
  </div>
</template>

<script>
import navMenu from "../../components/navMenu";
export default {
  components: {
    navMenu,
  },
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
.record-list {
  height: calc(100vh - 2.4rem);
  overflow: auto;
}
.record-box {
  height: 3.6rem;
  width: 90%;
  /* border: 2px solid #606266cb ; */
  margin: 20px 5%;
  border-radius: 10px;
  background-color: #60626662;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.record-box .top-box {
  height: 2.6rem;
  width: 100%;
}

.record-box .top-box .line {
  padding-left: 10px;
}
.record-box .bottom-box {
  height: 1rem;
  width: 100%;
  background-color: #606266c4;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>