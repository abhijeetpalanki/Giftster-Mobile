import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [quantity, setQuantity] = useState(3);
  const [gender, setGender] = useState("man");
  const [age, setAge] = useState(30);
  const [priceMin, setPriceMin] = useState(25);
  const [priceMax, setPriceMax] = useState(100);
  const [hobbies, setHobbies] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quantity</Text>
      <TextInput
        placeholder="Quantity"
        keyboardType="numeric"
        style={styles.input}
        value={quantity.toString()}
        onChangeText={(s) => setQuantity(Number.parseInt(s))}
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        placeholder="Age"
        keyboardType="numeric"
        style={styles.input}
        value={age.toString()}
        onChangeText={(s) => setAge(Number.parseInt(s))}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 16,

    borderColor: "#353740;",
    borderWidth: 1,
    borderRadius: 4,

    padding: 16,
    marginTop: 6,
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: "gray",
  },
});
