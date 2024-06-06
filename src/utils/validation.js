export const checkCredentials = (name, email, password) => {
  const isValidName = /^[a-zA-Z ]{2,30}$/.test(name);
  const isValidEmail =
    /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/.test(
      password
    );

  if (!isValidName) return "Name must have more than two character";
  if (!isValidEmail) return "Email is not valid";
  if (!isValidPassword)
    return "Password must have Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
  return null;
};
