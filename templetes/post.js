 
 

function ok( big , small ){
    return big.includes( small ) ;
}  


function listsPosts( id , value ){

    const box = document.getElementById(id);
  
    while (box.firstChild) {
        box.removeChild(box.lastChild);
      }

    fetch('../data-app-server/data.json')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        
        for (const key in json) {
            for (const key2 in json[key]) {
             
                let big = json[key][key2].description ;
               
                if( ok( big , value ) == true ){
                    console.log( "fuck" );
                    box.appendChild( postCourse( json[key][key2] ) );
                }
                     
            }  
        }    
    });

}

function postCourse( post ){

    const Course = document.createElement('div');
    Course.setAttribute('class' , 'courses');

    const IMG = document.createElement('img');
    IMG.src = post.image ;
    IMG.setAttribute( "class" , "coursesImg" );
    Course.appendChild( IMG );

    const H1 = document.createElement('h2');
    H1.textContent = post.description;
    Course.appendChild( H1 );

    const PP = document.createElement( 'p' ) ;
    PP.textContent = post.title ;
    PP.setAttribute("class" , "coursesP") ;
    Course.appendChild( PP ) ;

    return Course;
}
 
