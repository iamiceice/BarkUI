import DefaultTheme from 'vitepress/theme'
import {bkButton} from "../../../packages/components";
import 'vitepress-theme-demoblock/theme/styles/index.css'
import {registerComponents} from "./register-components";

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData  }) {
        registerComponents(app) ;
        app.component('bkButton', bkButton);
    },
}