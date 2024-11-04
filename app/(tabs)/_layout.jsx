import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import GlobalApi from "../../services/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import { useContext, useEffect } from "react";
import { UserDetailContext } from "../../context/UserDetailContext";

const TabLayout = ({  }) => {
    
    const { user } = useUser();
    const { userDetail, setUserDetail } = useContext(UserDetailContext);

    useEffect(() => {
        user && verifyUser();
    },[user]);

    const verifyUser = async () => {
        try {
            const response = await GlobalApi.getUserInfo(user?.primaryEmailAddress?.emailAddress);
            if(response.data.data.length != 0) {
                setUserDetail(response.data.data);
                return;
            }
            const data = {
                userEmail: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName
            };

            const result = await GlobalApi.createNewUser(data);
            setUserDetail(result.data.data)
        } catch (error) {
            console.log('Error: ' + error.response)
        }
    };

    return (
        <Tabs screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: Colors.PRIMARY
         }}>
            <Tabs.Screen name='home'
                options={{ 
                    title: 'Home',
                    tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color}/>
                 }}
            />
            <Tabs.Screen name='gallery'
                options={{ 
                    title: 'Gallery',
                    tabBarIcon: ({color}) => <Ionicons name="folder-open" size={24} color={color}/>
                }}
            />
            <Tabs.Screen name='profile'
                options={{ 
                    title: 'Profile',
                    tabBarIcon: ({color}) => <Ionicons name="people" size={24} color={color}/>
                }}
            />
        </Tabs>
    );
};
export default TabLayout;