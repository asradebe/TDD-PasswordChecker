const uppercase = /[A-Z]/
const lowercase = /[a-z]/
const digit = /[0-9]/

function password_is_valid(password){

        if (password == "") {
            throw new Error("password should not be null");
        }
        if (!uppercase.test(password)) {
            throw new Error("password should have at least one uppercase letter");
        }
        if (!lowercase.test(password)) {
            throw new Error("password should have at least one lowercase letter");
        }
        if (!digit.test(password)) {
            throw new Error("password should have at least one digit");
        }
        if(password.length < 8) {
            throw new Error("password should be greater than 8 characters")
        }
    }
         
function password_is_okay(password) {
     
    if ((uppercase.test(password)) && (lowercase.test(password)) && (digit.test(password)) && (password.length > 8) && (password !== null)) {
        return true;
    }
    else {
        return false;
    }
}
//password_is_valid();
//password_is_okay();


