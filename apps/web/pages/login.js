import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()
    localStorage.setItem("token", data.token)
    alert("Logged in")
  }

  return (
    <div>
      <h1>Login</h1>
      <input onChange={e => setEmail(e.target.value)} placeholder="email" />
      <input onChange={e => setPassword(e.target.value)} placeholder="password" type="password" />
      <button onClick={login}>Login</button>
    </div>
  )
}
