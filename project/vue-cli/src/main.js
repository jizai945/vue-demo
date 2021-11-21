import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select, Radio } from 'element-ui';
Vue.config.productionTip = false

// Vue.use(ElementUI);

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.component(Radio.name, Radio);
Vue.use(Button)
Vue.use(Select)
Vue.use(Radio)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
