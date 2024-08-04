arr = [1,5,7,9,52,99];

function arrShort(){

     for(var i= 0; i<arr.length; i++){
          for(var j = i; j<arr.length; j++){
               if(arr[i]<arr[j] || arr[i] == 0){

               }else if(arr[i] > arr[j]){
                    var tempArr = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tempArr; 
               }
          }
     }
     
     }
     

