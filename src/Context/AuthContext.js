import React, { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user";

const AuthContext = createContext({
  authState: '',
  email: '',
  password: '',
  handleSignIn: () => { },
  handleSignUp: () => { },
  handleConfirmSignUp: () => { },
  handleForgotPassword: () => { },
  handleResetPassword: () => { },
  handleResendVerificationCode: () => { },
});

const { Provider } = AuthContext;

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState("default");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  async function handleSignIn() {
    if (!email || !password) {
      alert("please enter an email and password");
      return;
    }
    try {
      setIsLoading(true);

      setTimeout(function () {
        // console.log("Hola Mundo");
        dispatch(
          setUser({
            id: '1',
            username: email,
            email: email,
          })
        );
        setIsLoading(false);
        console.log("user signed In");
        setAuthState("signedIn");

      }, 2000);

    } catch (e) {
      alert(e.message);
      setIsLoading(false);
      console.log(e);
    }
  }

  return (
    <Provider
      value={{
        authState,
        setAuthState,
        email,
        setEmail,
        password,
        setPassword,
        handleSignIn,
        isLoading,
      }}
    >
      {children}
    </Provider>
  );
}

export { AuthContext, AuthProvider };
