// @ts-ignore
const {getPath}=require('./utils')

// @ts-ignore
module.exports={
    [getPath('/guide/')]:getGuideSidebar(),
}

function getGuideSidebar(){
    return [
        {
            text:'文档',
            items:[
                {
                    text:'Button',
                    link:'/guide/button',
                },
                {
                    text:'Demo2',
                    link:'/guide/demo2',
                },
            ],
        },
    ]
}