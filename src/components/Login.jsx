import { useRef, useState } from "react";
import Header from "./Header";
import { checkCredentials } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { BACKGROUND_IMAGE} from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = checkCredentials(
      name.current?.value,
      email.current?.value,
      password.current?.value
    );

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: photoURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    }
  };
  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="background image" />
      </div>
      <form
        className="absolute w-3/12 p-12 bg-black bg-opacity-85 my-40 mx-auto right-0 left-0 text-white rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
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
        <span className="py-2 font-bold text-lg text-red-500">
          {errorMessage}
        </span>
        <button
          className="p-2 my-6 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
