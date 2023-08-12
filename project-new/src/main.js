import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css'
import "../src/assets/scss/styles.scss";
import 'ion-rangeslider/css/ion.rangeSlider.min.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'

createApp(App).use(router).mount('#app')
