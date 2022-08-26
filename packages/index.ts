import type {App} from "vue";
import { forEach } from "lodash-es";
import * as components from '@/components/index';


export const BarkUI=()=>{
    components["bkButton"].name="bkButton";
    return{
        install:(app:App)=>{
            forEach(components,(component)=>{
                // @ts-ignore
                app.component(component.name,component);
            });
        },
    };
};

export {components};
