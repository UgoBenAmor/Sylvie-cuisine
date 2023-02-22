export default{
    name : "recette",
    title : "Recette",
    type:"document", 
    fields: [
        {
            name :"image",
            title :"Image",
            type:"array",
            of :[{type : "image"}],
            options :{
                hotspot : true,
            }
        },
        {
            name : "name",
            title : "Name",
            type : "string"
        },
        {
            name : 'slug',
            title : "Slug",
            type: "slug",
            options : {
                source :"name",
                maxLength : 90,
            }
        },
        {
            name : "chapitre",
            title : "Chapitre",
            type : "string"
        },

        {
            name:"temps",
            title :"Temps",
            type :"number",
        },
        
       
        {
            name: 'indications',
            type: 'array',
            title: 'Indications',
            of: [
              {
                type: 'block'
              }
            ]
          }

    ],
    
    
}

