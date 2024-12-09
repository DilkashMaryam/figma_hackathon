import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import type { AppProps } from "next/app"; // Use Next.js built-in types

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
