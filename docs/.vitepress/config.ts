// @ts-ignore
const nav=require('./configs/nav')
// @ts-ignore
const sidebar=require('./configs/sidebar')

// @ts-ignore
module.exports={
    title:'Hello VitePress',
    description:'Just playing around.',
    themeConfig:{
        nav,
        sidebar,
        //丝滑滚动
        smoothScroll:true,
        //启用时间线
        editLinks:true,
        editLinkText:'在GitHub上编辑此页',
        lastUpdated:'上次更新',
    },
    markdown: {
        // @ts-ignore
        config(md) {
            // @ts-ignore
            const {demoBlockPlugin} = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin, {
                cssPreprocessor: 'less'
            })
        }
    }
}