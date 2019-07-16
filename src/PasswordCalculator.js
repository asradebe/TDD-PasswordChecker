function password_is_valid(password){

   let expected = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{9,}$)/
   let result = expected.test(password) 
  
    try {
        if (result == false) throw ("password must contain at least one uppercase , lowercase letter and a number");
            
        }
        catch(error) {
            console.log("ERROR: " + error + ".");
        }

        return result;
       
    }
         
function password_is_okay(password) {

    let testUpper = /[A-Z]/.test(password);
    let testLower = /[a-z]/.test(password);
    let digit = /\d/.test(password);

    if ((testUpper) && (testLower) && (digit) && (password.length > 8) && (password !== null)) {
        return 'Pass';
     }
 
     else {
         return 'password is not okay';
     }

   
}
password_is_valid();
password_is_okay();


