// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import MyTable from './components/Cui'
import 'vue-lcui/dist/vue-lcui.min.css'
import Lcui from 'vue-lcui'
Vue.use(Lcui);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
