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
    // if (!email || !password) {
    //   alert("please enter an email and password");
    //   return;
    // }
    setIsLoading(true);
    try {
      setTimeout(() => {
        if (email.toLowerCase() === 'Hernan@gmail.com'.toLowerCase() && password === '1234') {
          dispatch(
            setUser({
              id: '1',
              username: email,
              email: email,
            })
          );
          console.log("user signed In");
          setAuthState("signedIn");
        } else {
          alert('Usuario o contraseña icorrectos')
          return
        }

      }, 3000);

    } catch (e) {
      alert(e.message);
      console.log(e);
    }
    setIsLoading(false);

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
