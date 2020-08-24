import Vue from 'vue';
import VeeValidate from 'vee-validate';

import axios from 'axios';

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';

window.axios = axios;
Vue.use(VeeValidate);

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});