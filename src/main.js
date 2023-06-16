import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import globalComponents from './assets/components/global'  //импорт глобальных компонентов

const app = createApp(App)

app.use(globalComponents)  //app.use для подключения глобальных компонентов

app.mount('#app')
