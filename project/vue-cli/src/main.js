import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import http from 'axios'

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/reset.scss' //全局样式
import { Button, Select, Radio, Container, Aside, Header, Main,
    Menu, MenuItem, MenuItemGroup, Submenu, Dropdown, DropdownMenu, DropdownItem, 
    Row, Col, Card, Table, TableColumn, Tag, Breadcrumb, BreadcrumbItem} from 'element-ui';
Vue.config.productionTip = false

// Vue.use(ElementUI);

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.component(Radio.name, Radio);
Vue.use(Button)
Vue.use(Select)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.prototype.$http = http

if (process.env.NODE_ENV === 'development') require('@/api/mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
