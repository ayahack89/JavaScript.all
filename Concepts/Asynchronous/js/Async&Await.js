// Promises using Async & Await 
const AsyncAwaitPromise = new Promise(function (resolve, reject) {
     setTimeout(() => {
          let er = true;
          if (!er) {
               console.log("SUCCESS");
               resolve({ Username: "Sristi Sarker", Gender: "Female" });

          } else {
               console.log("ERROR");
               reject("Unknown");
          }

     }, 2000);
})

async function AsyncPromiseConsumer() {
     try {
          let response = await AsyncAwaitPromise;
          console.log(response);
     } catch (err) {
          console.log("Execution Reject");
          console.log(err);
     }
}

AsyncPromiseConsumer();
