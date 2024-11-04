import React from "react";
import Colors from "../../constants/Colors";
import FormButton from "../../components/buttons/FormButton";
import { Text, Dimensions, Image, View } from "react-native";
import { Link } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

const { width, height } = Dimensions.get("window");
const imageHeight = (3 * height) / 4;

const LoginScreen = ({}) => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL("/(tabs)/home", { scheme: "myapp" }),
      });

      if (createdSessionId) {
        setActive({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <Image
        source={require("./../../assets/images/login.jpg")}
        style={{
          width: width,
          height: imageHeight,
          resizeMode: "cover",
        }}
      />
      <View
        style={{
          padding: 25,
          marginTop: -40,
          height: height - imageHeight + 100,
          backgroundColor: "white",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          gap: 30,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Draw Your Dream AI ✨
          </Text>
          <Text
            style={{
              color: Colors.GRAY,
              textAlign: "center",
            }}
          >
            Create an AI Art in Just one Clik
          </Text>
        </View>
        <FormButton callback={onPress}>Continue</FormButton>
        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: Colors.GRAY,
          }}
        >
          By Continuing you agree to our terms & conditions
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();
