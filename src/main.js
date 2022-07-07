import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI';
import router from "@/router/router";
import 'bootstrap/dist/css/bootstrap.css'
// import Vue from 'vue'
// import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
})

app
	.use(router)
	.mount('#app');

// Vue.use(BootstrapVue)
// 	.use(IconsPlugin)

import 'bootstrap/dist/js/bootstrap.js'