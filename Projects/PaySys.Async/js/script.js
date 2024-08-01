const paymentSystem = new Promise(function(resolve, reject){
     setTimeout(function(){
         console.log("Payment send....")
         resolve(
             {
                 PaidTo: "Paid to: Agnik Roy",
                 PaidBy: "Paid by: Ayanabha Chatterjee",
                 TransferDetails: "===== Transfer Details =====",
                 TransactionId: "Transaction ID: T236458592375658403047565857384Y65850",
                 DebitedFrom: "Debited from : Punjab National Bank",
                 AC: "Account number: XXXXXXXXX7893",
                 UTR: "UTR: 4555438796",
                 Amount: " ₹60",
             })
     }, 2000)
 })
 paymentSystem.then(function(paymentInfo){
     setTimeout(function(){
         console.log("Please wait.....");
         
     },4000)
     setTimeout(function(){
         console.log("Payment Info")
         console.log(paymentInfo);
         setTimeout(function(){
             console.log("Payment successful ✅")
             
         },6000)
         
     }, 5000)
     
 })