import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, AntDesign} from "@expo/vector-icons";


const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
  // theme: "grey"
};

const tasks = [
  
  {
  task: "Morning Walk", 
  icon: "hiking", 
  theme: "#008b8b",
  stamp: "Today . 8pm"
},

  
{
  task: "Meeting with HR", 
  icon: "account-tie", 
  theme: "#37003c",
  stamp: "Today . 12noon"
},

  
{
  task: "Shopping with family", 
  icon: "cart", 
  theme: "#fed132",
  stamp: "Tomorrow . 3am"
},

{
  task: "Time for Gym", 
  icon: "weight", 
  theme: "#008b8b",
  stamp: "Saturday . 4pm"
},
];

const Task =  ({task, icon, theme, stamp}) => {

  return (
    <View>
    <View style={{
      backgroundColor: colors.white,
      flexDirection: "row",
      marginHorizontal: 16, 
      marginVertical: 4,
      borderRadius: 20,
      paddingVertical: 20, 
      paddingHorizontal: 24 ,
      alignItems: "center",
      justifyContent: "space-between"
    }}>

    <View style={{ flexDirection: "row", alignItems: "center"}}>

    <MaterialCommunityIcons 
name={icon}
size={30}
style={{ color: theme, marginRight: 5 }} />


    <View>
      <Text style={{fontSize: 16}}> {task}</Text>
      <Text style={{color: colors.greyish}}> {stamp}</Text>

    </View>
</View>


<View style={{ flexDirection: "row", 
}}>

<MaterialCommunityIcons 
name="pencil"
size={30}
style={{ color: theme }} />

<MaterialCommunityIcons 
name="trash-can"
size={30}
style={{ color: theme, marginLeft: 5 }} />



</View>

    </View>
    </View>
  )
}

export default function App(props) {
  return (

    <View style={{
      flex: 1, 
      backgroundColor: colors.themeColor
      }}>

    <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
    <View style={{ 
      backgroundColor: colors.
      themeColor
      }}> 
    <View 
    style={{
      padding:30, 
      flexDirection: "row", 
      justifyContent: "space-between"
      }}>

<MaterialCommunityIcons 
name="text" 
size={30}
style={{ color: colors.white }} />

<View style={{ flexDirection: "row", justifyContent: "space-between"}}>

 
<MaterialCommunityIcons 
name="bell-outline" 
size={30}
style={{ color: colors.white }} />


<AntDesign 
name="user" 
size={30}
style={{ color: colors.white }} />

</View>
</View>

<View style={{ padding: 20 }}>
 <Text style={{ color: colors.white, paddingHorizontal: 10, fontSize: 30}}>
 {"Hello, \nBenjamin"}
 </Text>
 <View style={{
  paddingVertical:6,
  paddingHorizontal: 25,
  justifyContent: "space-between",
  flexDirection: "row",
  backgroundColor: colors.tint,
  borderRadius: 20, 
  marginVertical: 15, alignItems: "center"
 }}> 
 
 <MaterialCommunityIcons 
name="magnify"
size={30}
style={{ color: colors.white }} />
<View style={{ flexDirection: "row"}}>
<MaterialCommunityIcons 
name="microphone" 
size={30}
style={{ color: colors.white }} />

<MaterialCommunityIcons 
name="tune" 
size={30}
style={{ color: colors.white }} />


 </View>
 </View>
</View>
    </View>

<View style={{ padding: 20, 
  flexDirection: "row",
  backgroundColor: colors.background,
  backgroundColor: colors.white,
  justifyContent: "space-between",
  borderTopLeftRadius: 20,
  alignItems: "center"
  }}>
  <Text style={{ fontSize: 24, paddingLeft: 20}} >Tasks</Text>

<MaterialCommunityIcons 
name="plus" 
size={40}
style={{ color: colors.themeColor, 
borderRadius: 20,
marginHorizontal: 8,

}} />

</View>


<ScrollView 
style={{

backgroundColor: colors.background

}}
>
{tasks.map(task => (
  <Task 

  task={task.task}
  icon={task.icon}
  theme={task.theme}
  stamp={task.stamp}
  />
))}

</ScrollView>

    </View>

  );
}