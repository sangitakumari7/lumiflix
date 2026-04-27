export const checkValidData = (email, password, name) => {
  
  if (name !== undefined && name.trim() === "") {
    return "Full name is required";
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isEmailValid) {
    return "Please enter a valid email";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null; // ✅ no error
};