// CSS imports
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue imports
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

// JS imports
import "bootstrap/dist/js/bootstrap"