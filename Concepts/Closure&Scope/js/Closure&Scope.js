      let globalVar = "This is a Global variable";
       function scope(){
            let localVar = "This is a Local variable";
            console.log(globalVar); // It can access to the global variable.
            console.log(localVar);  // It can access to the local variable.
       }
       console.log(scope());
       console.log(globalVar); // It can access to the global variable.
       // console.log(localVar);  // It can access to the local variable.

       // Function declaration for closureParent
       let c = function closureParent(){
            // Local variable accessible only within closureParent
            let TheLocal = "This is Local Access";
        
            // Logging the global and local variables within closureParent
            console.log("Access: closureParent => " + globalVar); // Accesses the global variable
            console.log("Access: closureParent => " + TheLocal);  // Accesses the local variable
        
            // These variables are not yet defined, will cause ReferenceError
            console.log("Access: closureParent => " + childBoyVar); // ReferenceError: childBoyVar is not defined
            console.log("Access: closureParent => " + childGirlVar); // ReferenceError: childGirlVar is not defined
            
            // Nested function declaration closureChildBoy
            function closureChildBoy(){
                // Local variable accessible only within closureChildBoy
                let childBoyVar = "This is a boy kid.";
                
                // Logging the global, parent local, and own local variables
                console.log("Access: closureChildBoy => " + globalVar); // Accesses the global variable
                console.log("Access: closureChildBoy => " + TheLocal);  // Accesses the parent's local variable
                console.log("Access: closureChildBoy => " + childBoyVar); // Accesses its own local variable
                
                // This variable is not yet defined, will cause ReferenceError
                console.log("Access: closureChildBoy => " + childGirlVar); // ReferenceError: childGirlVar is not defined
            }
        
            // Calling the nested function closureChildBoy
            closureChildBoy();
        
            // Nested function declaration closureChildGirl
            function closureChildGirl(){
                // Local variable accessible only within closureChildGirl
                let childGirlVar = "This is a girl kid.";
                
                // Logging the global, parent local, and own local variables
                console.log("Access: closureChildGirl => " + globalVar); // Accesses the global variable
                console.log("Access: closureChildGirl => " + TheLocal);  // Accesses the parent's local variable
                
                // This variable is not defined in this scope, will cause ReferenceError
                console.log("Access: closureChildGirl => " + childBoyVar); // ReferenceError: childBoyVar is not defined
                console.log("Access: closureChildGirl => " + childGirlVar); // Accesses its own local variable
            }
            
             // Calling the nested function closureChildGirl
            closureChildGirl();
        }
        
        // Calling the parent function closureParent
        c();
       
        
       