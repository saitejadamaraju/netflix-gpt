export const Validate=(email,password)=>{
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const isEmailCorrect= emailRegex.test(email);
    const isPasswordCorrect=passwordRegex.test(password);
     
    if(isEmailCorrect===false)
            return "Email Id is Invalid";
    else if(isPasswordCorrect===false)
           return "password is Invalid";
    else
        return null; 

}

