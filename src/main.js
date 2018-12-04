// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 请求文件内容
function getServerConfig () {
  return new Promise((resolve, reject) => {
    axios.get('./static/serverConfig.json').then(result => {
      console.log(result)
      let config = result.data;
      for (let key in config) {
        Vue.prototype[key] = config[key];
      }
      resolve();
    })
  })
}
// 请求文件内容及创建实例
async function main () {
  await getServerConfig();
  new Vue({
    el: '#app',
    router,
    template: '<App />',
    components: { App }
  })
}
// 方法初始执行
main();
