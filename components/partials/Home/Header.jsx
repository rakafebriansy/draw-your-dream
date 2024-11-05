import { Text, View, Image } from "react-native";
import Colors from  "../../../constants/Colors";
import { useUser } from "@clerk/clerk-expo";
import { useContext } from "react";
import { UserDetailContext } from "../../../context/UserDetailContext";

const Header = ({  }) => {

    const { user } = useUser();
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    // console.log(userDetail)

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Text style={{
                fontSize: 20,
                color: Colors.PRIMARY,
                fontWeight: 'bold'
            }}>Draw Your Dream AI</Text>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                    borderWidth: 0.4,
                    borderRadius: 99,
                    paddingHorizontal: 10
                }}>
                    <Image
                        source={require('../../../assets/images/coin.png')}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                    {userDetail?.credits ? 
                        <Text>{userDetail?.credits}</Text>
                        : 
                        <Image 
                        source={require('../../../assets/images/loading.gif')}
                        style={{
                            width: 20,
                            height: 20,
                        }}
                        /> 
                    } 
                    
                </View>
                <Image 
                    source={{ 
                    uri: user?.imageUrl
                    }}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 99
                    }}
                 />
            </View>
        </View>
    );
};
export default Header;