// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue imports
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// JS imports
import "bootstrap/dist/js/bootstrap"
import "jquery/dist/jquery"


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

window.$ = window.jQuery = require('jquery')