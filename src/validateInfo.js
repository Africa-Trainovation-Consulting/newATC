export default function validateInfo(values){
    let errors = {}


    //Email
    if(!values.email){
        errors.email = 'Email is required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Email address is invalid'
    }

    //Password
    if(!values.password){
        errors.password = 'Password is required'
    }else if (values.password.length < 8){
        errors.password = 'password is too short'
    }

return errors;
}