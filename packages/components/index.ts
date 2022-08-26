import bkButton from "./button/bkButton.vue"

// @ts-ignore
const install=app=>{
    app.use(bkButton);
}
const BarkUI={
    install,
}
export {bkButton};
export default BarkUI;


