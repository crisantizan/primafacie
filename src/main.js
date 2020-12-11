import { createApp } from 'vue';
import App from './App.vue';

// import components here
import Button from './components/Button.vue';
import Input from './components/Input.vue';

// export components for this library
export default {
  Button,
  Input
};

createApp(App).mount('#app');
