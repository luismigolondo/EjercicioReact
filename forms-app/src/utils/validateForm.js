export default function validateForm(values) {
    const err = {};
    
    if(values.username.length < 5){
        err.username = "Username too short. Username must be +6 characters long...";
    }
    if (values.password < 5) {
        err.password = "Password must be +6 characters long...";
    }
    if (values.confirmPassword != values.password) {
        err.confirmPassword = "Passwords don't match...";
    }
    if (!values.agree) {
        err.agree = "You must agree to our Terms & Conditions Privacy Policy";
    }

    return err;
}