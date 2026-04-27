export const checkValidData = (email, password, name) => {
  
  // Email validation
  if (!email || email.trim() === "") {
    return "Email is required";
  }

  // Password validation
  if (!password || password.trim() === "") {
    return "Password is required";
  }

  // Name validation (ONLY for Sign Up)
  if (name !== null && name !== undefined) {
    if (name.trim() === "") {
      return "Name is required";
    }
  }

  return null;
};