export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[
                {
                    name:'work',
                    title:'Work',
                    type:'document',
                    fields:[
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
                        }
                    ]
                }
            ]
        },
    ]
}