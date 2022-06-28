export const validation = (data,type) => {
  const errors = {};
  if(type==="signUp"){

    if (! data.Name.trim()) {
      errors.Name = "name is required";
    } else if ( !/^[A-Za-z][A-Za-z0-9_]{1,18}$/.test(data.Name)){
      errors.Name ="your name is invalid"
  
    }else{
      delete errors.Name;
    }
    if (! data.LastName.trim()) {
      errors.LastName = "LastName is required";
    } else if ( !/^[A-Za-z][A-Za-z0-9_]{1,28}$/.test(data.LastName)){
      errors.LastName ="your LastName is invalid"
  
    }else{
      delete errors.LastName;
    }
    if(!data.ConfirmPassword){
      errors.ConfirmPassword="confirm your password"
  
  }else if(data.ConfirmPassword !==data.Password){
      errors.ConfirmPassword="your password not match"
  }else{delete errors.ConfirmPassword }
  
  if(!data.isAccepted){
    errors.isAccepted="accept our privicy policy"
  }else{
    delete errors.isAccepted
  }
  }
  if (!data.Email) {
    errors.Email = "Email is required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.Email)
  ) {
    errors.Email = "Email is INVALID";
  } else {
    delete errors.Email;
  }
  if (!data.Password) {
    errors.Password = "Password is required";
  } else if (! /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(data.Password)) {
    errors.Password = "password should contain 8 letter password, with at least a symbol, upper and lower case letters and a number "
}else{delete errors.Password}

return errors}