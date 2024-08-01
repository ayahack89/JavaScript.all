/* Promises */

// Promise resolve
// Sync execution 
const promisesOne = new Promise(function (resolve, reject) {
     console.log("Sync,task execute successfully");
     resolve();
})
promisesOne.then(
     function () {
          console.log("Sync, task promise consume successfully");
     }
)

// Async execution
const promisesTask = new Promise(function (resolve, reject) {
     setTimeout(function () {
          console.log("Async, task completed successfully");
          resolve();
     }, 5000)

})
promisesTask.then(function () {
     setTimeout(function () {
          console.log("Async, promise consume successfully");
     }, 2000)
})


// Data retrieval 
const dataRetrieval = new Promise(function (resolve, reject) {
     setTimeout(function () {
          console.log("Data retrieve successfully");
          resolve({
               username: "ayanabha",
               email: "demo3ayanabha@gmail.com",
               MobileNo: 9875682351
          })
     }, 6000)

})
dataRetrieval.then(function (userData) {
     console.log("Please wait.......")
     setTimeout(function () {
          console.log("Data fetching..... ");
          setTimeout(function () {
               console.log(userData);
               console.log("Data retrieval promise consume successfully");

          }, 2000)
     }, 10000)

})

//Promise rejects
//Async execution 
const FileAccess = new Promise(function (resolve, reject) {
     setTimeout(function () {
          var error = false;
          if (!error) {
               console.log("Execution Successful ✅");
               resolve({
                    FileName: "abcd.exe",
                    FilePath: "C:\\User\\System32\\nosexos\\abcd.exe",
                    FileExtension: ".exe",

               });
          } else {
               console.log("Execution Reject ❌");
               reject({ ERROR: "Oops! Something went wrong : (" });
          }
     }, 3000)
});

FileAccess.then(function (fileDetails) {
     setTimeout(function () {
          console.log("Procession.....");
          setTimeout(function () {
               console.log("File Details:");
               console.log(fileDetails);

          }, 1000)
     }, 5000)
     return fileDetails;
}).then(function (fileDetails) {
     console.log(" {abcd.exe}:" + fileDetails.FileName);
     console.log("Access Grant ✅");       /*In JavaScript, promises allow chaining of then methods, which helps to handle asynchronous operations sequentially.                            
                                             Each then method returns a new promise, and the value returned from the callback function within a then method is                       
                                             passed to the next then method in the chain.  */
}).catch(function (fileAccessDenied) {
     setTimeout(function () {
          console.log("{ERROR}:" + fileAccessDenied.ERROR);
          console.log("Access Denied ❌")

     }, 0)
}).finally(function () {
     setTimeout(function () {
          console.log("Session End");
     }, 8000)
})








