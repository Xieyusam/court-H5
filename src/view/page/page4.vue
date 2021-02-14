<template>
  <div class="page-box">
    <div class="header-box">
      <i @click="back" class="el-icon-arrow-left back"></i>{{ court.name }}
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">今天{{ dayArry[0].str }}</mt-tab-item>
      <mt-tab-item id="2">明天{{ dayArry[1].str }}</mt-tab-item>
      <mt-tab-item id="3">后天{{ dayArry[2].str }}</mt-tab-item>
    </mt-navbar>
    <div class="list-box" v-if="selected == '1'">
      <div class="list-inner" v-for="(item, index) in order1" :key="index">
        <div class="inner-line">
          <div class="line-info">{{ index | orderTimeTypeFilters }}</div>
          <div class="line-info" style="color: #67c23a" v-if="item.user_name">
            {{ item.user_id == user.id ? "您已预定该场地" : "已预定" }}
          </div>
          <div
            class="line-info"
            v-else
            @click="newOrderCreate(0, index, court, user)"
          >
            点击预定
          </div>
        </div>
      </div>
    </div>
    <div class="list-box" v-if="selected == '2'">
      <div class="list-inner" v-for="(item, index) in order2" :key="index">
        <div class="inner-line">
          <div class="line-info">{{ index | orderTimeTypeFilters }}</div>
          <div class="line-info" style="color: #67c23a" v-if="item.user_name">
            {{ item.user_id == user.id ? "您已预定该场地" : "已预定" }}
          </div>
          <div
            class="line-info"
            v-else
            @click="newOrderCreate(1, index, court, user)"
          >
            点击预定
          </div>
        </div>
      </div>
    </div>
    <div class="list-box" v-if="selected == '3'">
      <div class="list-inner" v-for="(item, index) in order3" :key="index">
        <div class="inner-line">
          <div class="line-info">{{ index | orderTimeTypeFilters }}</div>
          <div class="line-info" style="color: #67c23a" v-if="item.user_name">
            {{ item.user_id == user.id ? "您已预定该场地" : "已预定" }}
          </div>
          <div
            class="line-info"
            v-else
            @click="newOrderCreate(2, index, court, user)"
          >
            点击预定
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navMenu from "../../components/navMenu";
import { courtType, returnThreeDay, orderTimeType } from "@/util/common";
import { OrderByDate, newOrder } from "@/api/order";
import { localData } from "@/util/local";
import { MessageBox } from "mint-ui";

export default {
  components: {
    navMenu,
  },
  data() {
    return {
      dayArry: [],
      selected: "1",
      tableData: [],
      court: {},
      user: localData("get", "userinfo"),
      order1: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      order2: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      order3: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    };
  },
  filters: {
    courtTypeFilters(value) {
      return courtType(value);
    },
    orderTimeTypeFilters(value) {
      return orderTimeType(value);
    },
  },
  created() {
    this.court = { ...this.$route.query };

    this.getThreeDay();
  },
  mounted() {
    console.log(this.$route.query);
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    getThreeDay() {
      console.log(returnThreeDay());
      this.dayArry = returnThreeDay();
      this.handleShow({ id: this.court.id }, this.dayArry);
    },
    handleShow(row, dayArry) {
      this.dialogVisible = true;
      const parem1 = {
        courtId: row.id,
        date: dayArry[0].gettime.toString(),
      };
      const parem2 = {
        courtId: row.id,
        date: dayArry[1].gettime.toString(),
      };
      const parem3 = {
        courtId: row.id,
        date: dayArry[2].gettime.toString(),
      };
      this.getThreeDayOrder(parem1, parem2, parem3);
    },
    getThreeDayOrder(parem1, parem2, parem3) {
      OrderByDate(parem1).then((res) => {
        if (res.code == 200) {
          // console.log(res.data, 1);
          const data = res.data.Orders.filter((item) => item.status != 2);
          this.orderDue(1, data);
        }
      });
      OrderByDate(parem2).then((res) => {
        if (res.code == 200) {
          // console.log(res.data, 2);
          const data = res.data.Orders.filter((item) => item.status != 2);
          this.orderDue(2, data);
        }
      });
      OrderByDate(parem3).then((res) => {
        if (res.code == 200) {
          // console.log(res.data, 2);
          const data = res.data.Orders.filter((item) => item.status != 2);
          this.orderDue(3, data);
        }
      });
    },
    orderDue(type, data) {
      if (type == 1) {
        this.order1 = this.order1.map((item, index) => {
          data.forEach((element) => {
            if (index.toString() == element.datetype) {
              item = { ...element };
            }
          });
          return item;
        });
        console.log(this.order1, 1);
      }
      if (type == 2) {
        this.order2 = this.order2.map((item, index) => {
          data.forEach((element) => {
            if (index.toString() == element.datetype) {
              item = { ...element };
            }
          });
          return item;
        });
        console.log(this.order2, 2);
      }
      if (type == 3) {
        this.order3 = this.order3.map((item, index) => {
          data.forEach((element) => {
            if (index.toString() == element.datetype) {
              item = { ...element };
            }
          });
          return item;
        });
        console.log(this.order3, 3);
      }
    },
    newOrderCreate(dayIndex, datetype, court, user) {
      const text =
        "你将预定该场地" +
        this.dayArry[dayIndex].str +
        "的" +
        orderTimeType(datetype) +
        "时间段，取消预定需要联系管理员。";
      MessageBox.confirm(text, "预定")
        .then(({ value, action }) => {
          const parem = {
            user_id: user.id,
            user_name: user.name,
            phone: user.phone,
            court_id: court.id,
            court_name: court.name,
            type: court.type,
            date: this.dayArry[dayIndex].gettime.toString(),
            datetype: datetype,
          };
          newOrder(parem)
            .then((res) => {
              if (res.code == 200) {
                this.$toast({
                  message: "预定成功",
                  position: "center",
                  duration: 800,
                });
                if (dayIndex == 0) {
                  this.order1[datetype].user_name = user.name;
                  this.order1[datetype].user_id = user.id;
                }
                if (dayIndex == 1) {
                  this.order2[datetype].user_name = user.name;
                  this.order2[datetype].user_id = user.id;
                }
                if (dayIndex == 2) {
                  this.order3[datetype].user_name = user.name;
                  this.order3[datetype].user_id = user.id;
                }
                this.$forceUpdate();
              }
            })
            .catch((err) => {
              this.$toast({
                message: "预定失败",
                position: "center",
                duration: 800,
              });
            });
        })
        .catch((err) => {});
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
.list-box {
  width: 100%;
  height: calc(100vh - 3rem);
  /* display: flex;
  justify-content: center; */
  overflow-y: auto;
}
.list-inner {
  width: 92%;
  height: 1rem;
  border: 1px solid #606266;
  border-left: 6px solid #606266;
  border-radius: 8px;
  margin: 0.4rem auto;
  display: flex;
  flex-direction: column;
}
.inner-line {
  width: 100%;
  height: 1rem;
  font-size: 0.4rem;
  line-height: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.inner-line .line-info {
  width: 40%;
  text-align: center;
}
</style>
<style>
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0.08rem solid #606266;
  color: #606266;
  margin-bottom: -0.08rem;
}
.mint-msgbox-btn {
    line-height: 0.93333rem;
    display: block;
    background-color: #fff;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0;
    font-size: 0.4rem;
    border: 0;
}
</style>