import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

  const { user } = useUser();
  console.log(user);

  return (
    <View>
      {user ? <Redirect href={'/(tabs)/home'}/> : <Redirect href={'/login'}/>}
    </View>
  );
}
