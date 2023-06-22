export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'from',
            title:'From',
            type:'date'
        },
        {
            name:'to',
            title:'To',
            type:'date'
        },
        {
            name:'imgUrl',
            title:'ImageUrl',
            type:'image',
            options:{
                hotspot:true
            }
        },
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'achievements',
            title:'Achievements',
            type:'array',
            of:[
                {
                    name:'achievement',
                    title:'Achievement',
                    type:'string'
                }
            ]
        }
    ]
}