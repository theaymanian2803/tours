
import {defineField, defineType} from 'sanity'

export default defineType ( {
    name: "project" ,
    title :"Projects",
    type:"document" ,
    fields: [
    defineField({

            name :"name" ,
            title :"Name" ,
            type : "string" ,
        }) ,
        
        defineField(  {
            name :"slug" ,
            title :"Slug" ,
            type : "slug" ,
            options : {source :"name"}
        }), 

        
        defineField({

           name :"image" ,
            title :"Image" ,
            type : "image" ,
            options: { hotspot:true} ,
            fields: [
                {
                    name : "alt" ,
                    title : "alt",
                    type : "string" 
                }
            ]
        }), 

      defineField({
            name : "url" ,
            title :"URL" ,
            type : "string" ,
        }) ,

        defineField({
            name:"content" ,
            title:"Content" ,
            type : "array" ,
            of : [{type :"block"}]

        }),
      ]
    
} )

