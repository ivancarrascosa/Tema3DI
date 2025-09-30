import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello world</Text>
      <TouchableOpacity
        onPress={() => alert("Hello world!")}
        style={{
          backgroundColor: "#007BFF",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
        >
        <Text style={{ color: "#FFFFFF" }}>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
}
