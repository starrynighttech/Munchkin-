import { useState } from "react"
import { View, TextInput, Button, Text } from "react-native"

export default function LoginScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()
    console.log(data)
  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="email" onChangeText={setEmail} />
      <TextInput placeholder="password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={login} />
    </View>
  )
}
