export function Ascending(arr) {

     for (var i = 0; i < arr.length; i++) {
          for (var j = i+1; j < arr.length; j++) {
               if (arr[i] < arr[j] || arr[i] == 0) {
                   continue;
               } else if (arr[i] > arr[j]) {
                    var tempArr = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tempArr;
          }
     }

     }
     return arr;
}

export function Descending(arr){
     for (var i = 0; i<arr.length; i++){
          for (var j = i+1; j<arr.length; j++){
               if(arr[i]>arr[j]){
                    continue;
               }else if(arr[i]<arr[j] || arr[i] == 0){
                    var tempArr = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tempArr;
               }
          }
     }
     return arr;

}



