//import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { lazyPlugin } from "@/directives";
import "@/styles/common.scss";
import {componentPlugin} from '@/components/index'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(lazyPlugin);
app.use(componentPlugin)
app.mount("#app");



// console.log('请求开始');
// testGet().then((result)=>{
//     console.log(result)
// })

// console.log('请求结束');
