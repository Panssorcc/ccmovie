import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios from 'axios'
Vue.prototype.axios=axios;

/* 全局过滤器 */
Vue.filter('setWH',(url , arg)=>{
  return url.replace(/w\.h/,arg);
});

/* 全局组件 */
import Scroller from '@/components/Scroller'
Vue.component('Scroller' , Scroller);

import Loading from '@/components/Loading'
Vue.component('Loading' , Loading);

import noFound from '@/components/noFound'
Vue.component('noFound' , noFound);



/* 引入mintUI */
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
