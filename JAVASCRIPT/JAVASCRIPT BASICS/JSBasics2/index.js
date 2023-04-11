
        console.log('lets start');

        //object creation
  let rectangle={

     length : 1,
     breadth :2, 
  

   draw: function( ){
    
    console.log('drawing ractangle');
    }
   };

   //factory function

    function creatRecetangle(length,breadth){

        return rectangle={

            length,
            breadth, 
         
       
          draw(){
           
           console.log('drawing ractangle');

           }
          };
    }
  let rectangleObj=creatRecetangle(5,4);
  let rectangleObj2=creatRecetangle(2,3);
  let rectangleObj3=creatRecetangle(7,9);

//constructor function->pascal notation
function Rectangle(len,bre){

    this.length=len;
    this.breadth=bre;
     this. draw=function() {
           
    console.log('drawing ractangle');

    }
}
//object creation using constructor function


let rectangleObject= new Rectangle(2,3);