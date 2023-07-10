import { createApp } from 'vue'
import App from "./App.vue"
import Friend from "./components/MyFriend.vue"
const appVue=createApp(App)
appVue.component('MyFriend',Friend);
appVue.mount('#maiapp')

