// @ts-ignore
const nav=require('./configs/nav')
const sidebar=require('./configs/sidebar')

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
        config(md) {
            const {demoBlockPlugin} = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin, {
                cssPreprocessor: 'less'
            })
        }
    }
}