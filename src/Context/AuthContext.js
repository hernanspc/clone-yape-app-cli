import React, { createContext, useState } from "react";
import { useDispatch } from "react-redux";
// import { setUser } from "../features/user";

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

      // dispatch(
      //   setUser({
      //     id: userFromDB.data.getUser.id,
      //     firstName: userFromDB.data.getUser.firstName,
      //     lastName: userFromDB.data.getUser.lastName,
      //     profilePicture: userFromDB.data.getUser.profilePicture,
      //     email: userFromDB.data.getUser.email.toLowerCase(),
      //     status: userFromDB.data.getUser.status,
      //     notificationToken: userFromDB.data.getUser.notificationToken,
      //     latitude: userFromDB.data.getUser.latitude,
      //     longitude: userFromDB.data.getUser.longitude,
      //   })
      // );

      setIsLoading(false);
      console.log("user signed In");
      setAuthState("signedIn");
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
