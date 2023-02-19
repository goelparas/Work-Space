export const checkLoginStatus = () => {
    
   return localStorage.length>0;
   
  }


export const setLoginStatus = (displayName,photoURL) => {
  
  localStorage.setItem("displayName".toLowerCase(),displayName);
  localStorage.setItem("photoURL".toLowerCase(),photoURL);
  
}

