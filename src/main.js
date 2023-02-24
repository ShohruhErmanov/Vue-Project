import { createApp } from 'vue'
import App from './App.vue'
import "./assets/stayl/stayl.scss";
createApp(App).mount('#app')
let MainContentInfo = [...document.querySelectorAll('.main__content-card')]
console.log(MainContentInfo);

MainContentInfo[0].style.background = "#B71C1C"
MainContentInfo[1].style.background = "#6A1B9A"
MainContentInfo[2].style.background = "#303F9F"
MainContentInfo[3].style.background = "#00695C"