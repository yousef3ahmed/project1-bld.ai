 
 

  function listsPosts( id ){
    
    const box = document.getElementById(id);
    
    fetch('../data-app-server/data.json')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        
        for (const key in json) {
            for (const key2 in json[key]) {
                
                box.appendChild( postCourse( json[key][key2] ) );
            }  
        }    
    });
    
 }

 function postCourse( post ){
    
    const Course = document.createElement('div');
    Course.setAttribute('class' , 'courses');
    Course.textContent = 'Hello world';
    
    console.log( "yousef" );


    const PP = document.createElement( 'p' ) ;
    PP.textContent = post.title ;
    PP.setAttribute("class" , "courses") ;
    Course.appendChild( PP ) ;

    return Course;
 }
 
