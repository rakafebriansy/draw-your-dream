import { Text, View } from "react-native";
import Header from "../../components/partials/Home/Header";
import Banner from "../../components/partials/Home/Banner";

const Home = ({  }) => {
    return (
        <View style={{ 
            paddingHorizontal:20,
            paddingVertical:40
         }}>
            <Header/>
            <Banner/>
        </View>
    );
};
export default Home;