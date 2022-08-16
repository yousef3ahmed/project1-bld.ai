 
 

function ok( big , small ){
    return big.includes( small ) ;
}  

let curCorce = "" ;

function listsPosts( id , value , compare ){

    const box = document.getElementById(id);
  
    while (box.firstChild) {
        box.removeChild(box.lastChild);
      }

    fetch('../data-app-server/data.json')
    .then(response => response.json())
    .then(json => {
        
        for (const key in json) {
            

            if( key.includes( compare )  ){
                curCorce = compare ;
                for (const key2 in json[key]) {
                    let big = json[key][key2].description ;
                    
                    if( ok( big , value ) == true ){
                        box.appendChild( postCourse( json[key][key2] ) );
                    }
                         
                }
            }   
        }    
    });

}

function postCourse( post ){

    const Course = document.createElement('div');
    Course.setAttribute('class' , 'card');
    Course.style = "width: 18rem;"

    const IMG = document.createElement('img');
    IMG.src = post.image ;
    IMG.setAttribute( "class" , "card-img-top" );
    Course.appendChild( IMG );


    const innerDiv = document.createElement('div');
    innerDiv.setAttribute( 'class' , 'card-body' );



    const PP = document.createElement('p');
    PP.setAttribute( 'class' , 'card-text' );
    PP.textContent = post.title;
    innerDiv.appendChild( PP );

    const H5 = document.createElement( 'h5' ) ;
    H5.textContent = post.description ;
    H5.setAttribute("class" , "card-title") ;
    innerDiv.appendChild( H5 ) ;

    const AA = document.createElement('a');
    AA.href = '#' ;
    AA.setAttribute( 'class' , 'btn btn-primary' ) ;
    AA.innerHTML = "Go somewhere" ;
    innerDiv.appendChild( AA ) ;


    Course.appendChild( innerDiv );
    

    return Course;
}


//////////////////////////////////////////  froms  ///////////////////////////////////////////////////////////////////


function doForm(){  
    let value = "" ; 
   var data = new FormData();
   data.append( "" , document.getElementById("search").value );
   for (let x of data.entries()) { 
       
       let out = x.toString() ; 
       for( let i = 1 ; i < out.length ; i++ ) value += out.charAt( i ) ;
       console.log(value); 
   }
   listsPosts( 'box' , value , curCorce );
   value = "";
   return false ; 
}





function Choose( string ){
    let x =  document.getElementById(string).value;
    listsPosts( 'box' , "" , string );
 }
 
