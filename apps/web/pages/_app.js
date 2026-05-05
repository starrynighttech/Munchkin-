import SmokeLayout from "../components/SmokeLayout"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <SmokeLayout>
      <Component {...pageProps} />
    </SmokeLayout>
  )
}
