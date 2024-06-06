import { useRef, useState } from "react";
import Header from "./Header";
import { checkCredentials } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkCredentials(name.current?.value, email.current?.value, password.current?.value);

    setErrorMessage(message);
    // console.log(name, email, password);
  }
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black bg-opacity-85 my-40 mx-auto right-0 left-0 text-white rounded-lg" onSubmit={(e) => e.preventDefault()}>
        <h1 className="py-4 font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-500"
          />
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email or mobile number"
          className=" p-2 my-4 w-full bg-gray-500"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className=" p-2 my-4 w-full bg-gray-500"
        />
        <span className="py-2 font-bold text-lg text-red-500">{errorMessage}</span>
        <button className="p-2 my-6 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
