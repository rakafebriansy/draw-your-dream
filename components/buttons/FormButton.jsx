import { Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";

const FormButton = ({ children }) => {
    return (
        <View
          style={styles.button}
        >
          <Text
            style={styles.buttonText}
          >
            {children}
          </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: "100%",
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 30
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
    }
});

export default FormButton;