<template>
  <div class="page-box">
    <div class="header-box">订场记录</div>
    <div class="record-list">
      <div class="record-box" v-for="(item, index) in listData" :key="index">
        <div class="top-box">预订时间:{{ item.date | dateFormatFilters}}&nbsp;{{item.datetype | orderTimeTypeFilters}}</div>
        <div class="bottom-box">
          <!-- <div class="line">下单时间:{{item.date | }}</div> -->
          <div class="line">场地:{{ item.court_name}}</div>
          <div class="line">类型:{{ item.type | courtTypeFilters}}</div>
          <div class="line">状态:<span :style="{color:item.status == 1 ? '#67C23A' : item.status == 2 ? '#F56C6C' :''}">{{ item.status | OrderTypeChange}}</span></div>
          <!-- <div class="line">预定人:xys 13143101301</div> -->
        </div>
      </div>
    </div>
    <navMenu :tabIndex="1"></navMenu>
  </div>
</template>

<script>
import navMenu from "../../components/navMenu";
import { OrderById } from "../../api/order";
import { cookieData, localData } from "@/util/local";
import { dateFormat,orderTimeType,courtType } from "@/util/common";


export default {
  components: {
    navMenu,
  },
  data() {
    return {
      user: localData("get", "userinfo"),
      listData: [],
    };
  },
  filters:{
    dateFormatFilters(value){
      return dateFormat("YYYY-mm-dd" , new Date(parseInt(value)))
    },
    dateFormatFilters(value){
      return dateFormat("YYYY-mm-dd" , new Date(parseInt(value)))
    },
    orderTimeTypeFilters(value){
      return orderTimeType(value)
    },
    courtTypeFilters(value) {
      return courtType(value);
    },
    OrderTypeChange(value) {
      let order = ["待使用", "已使用", "已取消"];
      return order[value];
    },
  },
  mounted() {
    this.getOrderById();
  },
  methods: {
    getOrderById() {
      const parems = {
        id: this.user.id,
      };
      OrderById(parems).then((res) => {
        if (res.code == 200) {
          this.listData = res.data.Orders;
        }
      });
    },
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
  height: calc(100vh - 2.6rem);
  overflow-y: auto;
}
.record-box {
  height: 2.6rem;
  width: 90%;
  /* border: 2px solid #606266cb ; */
  margin: 20px 5%;
    border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #60626662;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  font-size: 0.4rem;
}
.record-box .bottom-box {
  height: 1rem;
  width: 100%;
}

.record-box .bottom-box .line {
  padding-left: 10px;
  line-height: 0.5rem;
  font-size: 0.35rem;
  text-align: center;
  letter-spacing:0.1rem;
}
.record-box .top-box {
  height: 0.8rem;
  width: 100%;
  text-align: center;
  color: #ffffff;
  line-height: 0.8rem;
  background-color: #606266c4;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>