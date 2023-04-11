import {createApp} from "vue";
import App from "./App.vue";
import BarkUI from "@/components";
const app=createApp(App);
app.use(BarkUI);
app.mount(("#app"));