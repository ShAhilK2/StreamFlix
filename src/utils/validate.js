export const checkValidData = (email,password) =>{
    const isEmail = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isName = /([a-zA-Z0-9_\s]+).test(name);
    

    if(!isEmail) return("Email Id is Not Valid")

    if(!isPassword) return("Password is Not Valid")


return null
}