import Vue from 'vue'
import App from './App.vue'
//导入组件库
import CustomComponent from '../packages/index'
//注册组件库
//使用 Vue.use() 全局注册后，即可在任意页面直接使用了，而不需另外引入。当然也可以按需引入
Vue.use(CustomComponent)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
