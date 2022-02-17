import Vue from 'vue';
//import VueRouter from 'vue-router';

//Vue.use(VueRouter);

import App from './App.vue';
//import Cv from './components/Cv.vue';


/*const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/cv', component: Cv },
  ]
});
*/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //router,
}).$mount('#app')
  