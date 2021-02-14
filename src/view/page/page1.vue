<template>
  <div class="page-box">
    <div class="header-box">所有球场</div>
    <div class="list-box">
      <div class="list-inner" v-for="(item, index) in tableData" :key="index" @click="goToPage(item)">
        <div class="inner-line">
          <div style="width:31%;padding-left:0.2rem;">{{ item.type | courtTypeFilters}}</div>
          <div style="width:31%;padding-left:0.2rem;font-weight:600;">{{ item.name }}</div>
          <div style="width:31%;padding-left:0.2rem;" :style="{color:item.status == 0 ? '#67C23A' : '#F56C6C'}">{{ item.status == 0 ? '正常' : '停用' }}</div>
        </div>
        <div class="inner-line">
          <div style="width:70%;padding-left:0.2rem;overflow: hidden;">{{ item.tips }}</div>
          <div style="width:20%;font-size:0.3rem;color:#909399;">去预定<i class="el-icon-right"></i></div>

          </div>
      </div>
    </div>
    <navMenu :tabIndex="0"></navMenu>
  </div>
</template>

<script>
import navMenu from "../../components/navMenu";
import { AllCourt } from "@/api/court";
import { courtType } from "@/util/common";

export default {
  components: {
    navMenu,
  },
  data() {
    return {
      tableData: [],
    };
  },
  filters: {
    courtTypeFilters(value) {
      return courtType(value);
    },
  },
  mounted() {
    this.getAllCourt();
  },
  methods: {
    getAllCourt() {
      AllCourt().then((res) => {
        if (res.code == 200) {
          this.tableData = res.data.Courts;
        }
      });
    },
    goToPage(data){
      if(data.status == 1){
        this.$toast({
            message: "该球场暂时无法预定",
            position: "center",
            duration: 800,
          });
        return
      }
      this.$router.push({ path: "/page4",query:data });
    }
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
.list-box {
  width: 100%;
  height: calc(100vh - 2.6rem);
  /* display: flex;
  justify-content: center; */
  overflow-y: auto;
}
.list-inner {
  width: 92%;
  height: 1.4rem;
  border: 1px solid #606266;
  border-left: 6px solid #606266;
  border-radius: 8px;
  margin: 0.4rem auto;
  display: flex;
  flex-direction: column;
}
.inner-line {
  width: 100%;
  height: 0.7rem;
  font-size: 0.4rem;
  line-height: 0.7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>