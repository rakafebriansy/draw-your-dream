import { Text } from "react-native";
import { Dimensions, Image, View } from "react-native";
import Colors from "../../constants/Colors";
import FormButton from "../../components/buttons/FormButton";

const { width, height } = Dimensions.get("window");
const imageHeight = (3 * height) / 4;

const LoginScreen = ({}) => {
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
          backgroundColor: 'white',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          gap: 30
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
        <FormButton>Continue</FormButton>
        <Text style={{ 
          textAlign: 'center',
          fontSize: 12,
          color: Colors.GRAY
         }}>By Continuing you agree to our terms & conditions</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
