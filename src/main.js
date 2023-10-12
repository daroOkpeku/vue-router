import { createApp } from 'vue'
import App from './App.vue'
import  routes from './router/index.js'
// i import routes rules from router folder
import './assets/main.css'

const app = createApp(App)
// i am using the rules here
app.use(routes)
app.mount("#app")
// normal way 
// createApp(App).mount('#app')
