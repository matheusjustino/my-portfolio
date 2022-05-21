import "../../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";

// COMPONENTS
import { Navbar } from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
