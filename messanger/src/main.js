import './assets/main.css'

/** MVS13 VARIANT */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// /** FIRST VARIANT */
// // import { createApp } from 'vue'
// // import App from './App.vue'

// // createApp(App).use(router).mount('#app')




// /** FROM NPM DOCS */
// import App from './App.vue'
// import { createApp } from 'vue'
// // import store from './store'
// import VueSocketIO from 'vue-socket.io'

// createApp.use(new VueSocketIO({
//     connection: 'localhost:3001',
//     vuex: {
//         // store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     },
//     options: { path: "/my-app/" } //Optional options
// }))
 
// new createApp({
//     router,
//     // store,
//     render: h => h(App)
// }).$mount('#app')