 
 

function ok( big , small ){
    return big.includes( small ) ;
}  

let curCorce = "" ;
function listsPosts( id , value , compare ){

    const box = document.getElementById(id);
    while (box.firstChild) {
        box.removeChild(box.lastChild);
      }
    
    let Source = 'http://localhost:5400/' ;
    fetch(`${Source}${compare}`).then(response => {
        console.log(response);
        return response.json();
      }).then(data => {
        // Work with JSON data here
        curCorce = compare ;

        let wraaap = document.createElement( 'div' ) ;
        wraaap.setAttribute( 'class' , 'cards-wrapper' ) ;

        let cnt = 0 ;
        for (const key in data) {
            let big = data[key].description ;
            
            if( ok( big , value ) == true  ){
               
                let width = window.screen.width ;

                if( width >= 768 ){
                    wraaap.appendChild( postCourse( data[key] ) );
                    cnt++ ;
                    if( cnt%4 == 0  ){
    
                        const stack = document.createElement('div') ;
    
                        if( cnt == 4 )
                            stack.setAttribute('class' , 'carousel-item active');
                        else    
                            stack.setAttribute('class' , 'carousel-item');
                       
                        stack.appendChild( wraaap ) ;
                        box.appendChild( stack );
                        
                        wraaap = document.createElement( 'div' ) ;
                        wraaap.setAttribute( 'class' , 'cards-wrapper' ) ;
                    }
                }else{
                    wraaap.appendChild( postCourse( data[key] ) );
                    cnt++ ;
                    if( cnt%1 == 0  ){
    
                        const stack = document.createElement('div') ;
                        if( cnt == 1 )
                            stack.setAttribute('class' , 'carousel-item active');
                        else    
                            stack.setAttribute('class' , 'carousel-item');
                       
                        stack.appendChild( wraaap ) ;
                        box.appendChild( stack );
                        
                        wraaap = document.createElement( 'div' ) ;
                        wraaap.setAttribute( 'class' , 'cards-wrapper' ) ;
                    }
                }
              
            }
        }

        if( wraaap.firstChild ){
            
            const stack = document.createElement('div') ;
            stack.setAttribute('class' , 'carousel-item');

            stack.appendChild( wraaap ) ;
            box.appendChild( stack );
        }

        console.log(data);
      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });

}

function postCourse( post ){



    const Course = document.createElement('div');
    Course.setAttribute('class' , 'card');
    Course.style = "width: 15rem;"

    // Course.innerHTML = ` 
    
    // <h2  >
    //     ${
    //         post.
    //     }
    // </h2>
    // `

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
    console.log( string );
    listsPosts( 'box' , "" , string );
 }
 
