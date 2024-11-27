import './assets/main.css'

/** FIRST VARIANT */
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).use(router).mount('#app')






/** FROM NPM DOCS */
import App from './App.vue'
import Vue from 'vue'
// import store from './store'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    connection: 'localhost:3001',
    vuex: {
        // store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
    options: { path: "/my-app/" } //Optional options
}))
 
new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app')