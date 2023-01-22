import Navbar from "@/components/Navbar";
import Container from "@/container/container";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}
