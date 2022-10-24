import * as React from "react";
import SignIn from "../components/SignIn";
import { AuthProvider, AuthContext } from "../Context/AuthContext";
import { useColorScheme, Image, StatusBar, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Colors from "../constants/colors";
import SlideCarrousel from './SlidesScreen'

export default function Wrapper() {
    return (
        <AuthProvider>
            <Auth />
        </AuthProvider>
    );
}

function Auth() {
    const { authState } = React.useContext(AuthContext);
    const theme = useColorScheme();
    const image =
        theme === "dark"
            ? require("../assets/logo/logoApp.png")
            : require("../assets/logo/logoApp.png");

    console.log(authState);

    if (authState === 'default') {
        return <SlideCarrousel />
    }

    return (
        <KeyboardAwareScrollView
            style={{
                backgroundColor:
                    theme === "dark" ? Colors.dark.background : Colors.light.background,
                paddingHorizontal: 17,
            }}
            contentContainerStyle={{ paddingVertical: 90 }}
        >
            <Image
                source={image}
                style={{ width: 178, height: 178, alignSelf: "center" }}
            />
            {/* {authState === "default" && <DefaultAuth />} */}
            {authState === "signIn" && <SignIn />}
            <StatusBar
                barStyle={theme === "dark" ? "light-content" : "dark-content"}
            />
        </KeyboardAwareScrollView>
    );
}
