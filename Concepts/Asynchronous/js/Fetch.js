/* Fetch */
fetch('text.txt').then((response)=>{
     if(!response.ok){
          throw new Error("Network response was not ok");
     }
     console.log("Execution Successfully Completed")
     return response.text()
}).then((data)=>{
     if(data){
        document.getElementById('retrieve').innerHTML=data;  
     }else{
          document.getElementById('retrieve').innerHTML="No data found : (";
     }
}).catch((error)=>{
     document.getElementById('retrieve').innerHTML = "Oops! something went wrong : (";
     console.error('There was a problem with the fetch operation:', error);
})

