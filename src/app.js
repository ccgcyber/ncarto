import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

Vue.use(VueRouter)

// views
import Home from './views/Home.vue'

// external component
import SpinnerComponent from 'vue-simple-spinner'

// custom components
import HostItemComponent from './components/host-item.vue'
import StatusHeaderComponent from './components/status-header.vue'
import InterfaceStatusComponent from './components/interface-status.vue'

var router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/', redirect: '/home' }
  ]
})

const app = new Vue({
  router,
  components: {
    spinner: SpinnerComponent,    
    hostItem: HostItemComponent, 
    statusHeader: StatusHeaderComponent,
    interfaceStatus: InterfaceStatusComponent
  }
}).$mount('#app')