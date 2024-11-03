import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";

const TabLayout = ({  }) => {
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