import { createApp } from 'vue'
import './common/styles/style.css';
import App from './App.vue'
import 'virtual:windi.css'
import { setupRouter } from './common/router';
import { setupStore } from './common/store/index';


async function bootstrapApp() {
	const app = createApp(App);
	setupStore(app);
	setupRouter(app);

	app.mount('#app');
}

await bootstrapApp();