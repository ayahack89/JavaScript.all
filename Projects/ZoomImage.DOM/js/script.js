document.title="Zoom Image";
     
let check = 0;
function dbClick(){
     let imageAccess = document.getElementById("image");
     if(check == 0){
          imageAccess.style.width="400px";
          imageAccess.style.cursor="zoom-out";
          check = 1;

     }
     else{
          imageAccess.style.width="200px";
          imageAccess.style.cursor="zoom-in";
          check = 0;
     }

}