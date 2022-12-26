import { createApp } from 'vue'
import './common/styles/style.css';
import App from './App.vue'
import 'virtual:windi.css'
import { setupRouter } from './common/router';


async function bootstrapApp() {
	const app = createApp(App);
	setupRouter(app);

	app.mount('#app');
}

await bootstrapApp();