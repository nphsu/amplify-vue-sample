import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { AmplifyEventBus, AmplifyPlugin, components } from 'aws-amplify-vue'
import Amplify, * as AmplifyModules from 'aws-amplify'
import aws_exports from './aws-exports'
Amplify.configure(aws_exports)

Vue.config.productionTip = false
Vue.use(AmplifyPlugin, AmplifyModules)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
