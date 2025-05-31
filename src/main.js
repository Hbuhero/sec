import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';
import { createPinia } from 'pinia';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // Use MDI icons
  },
})


const app = createApp(App)


app.use(router)
app.use(vuetify)
app.use(createPinia())
app.mount('#app')
