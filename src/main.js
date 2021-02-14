// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "./util/axios"
import {
  cookieData
} from "@/util/local";
import '@/style/iconfont/iconfont.css';

import 'amfe-flexible';
Vue.config.productionTip = false

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '@/style/theme/index.css';
Vue.use(ElementUI);

Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    if (!cookieData("get", "token")) {
      next()
    } else {
      next("/");
    }
  } else {
    if (cookieData("get", "token")) {
      next()
    } else {
      next("/login");
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
