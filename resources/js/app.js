/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import App from './views';
import router from './routes';
import store from './store';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
// require('./bootstrap');

window.Vue = require('vue');
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// validasi form;
Vue.use(VeeValidate, {
  // This is the default
  inject: true,
  // Important to name this something other than 'fields'
  fieldsBagName: 'veeFields',
  // This is not required but avoids possible naming conflicts
  errorBagName: 'veeErrors',
});
// vue Sweet Alert
Vue.use(VueSweetalert2);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
  el: '#app',
  created() {
    AOS.init();
  },
  router,
  store,
  render: (h) => h(App),
});
