import "../../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// COMPONENTS
import { Navbar } from "@components/Navbar/Navbar";

const options = {
  position: positions.TOP_CENTER,
  timeout: 4000,
  offset: "30px",
  transition: transitions.SCALE,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <React.Fragment>
        <Navbar />
        <Component {...pageProps} />
      </React.Fragment>
    </AlertProvider>
  );
}

export default MyApp;
