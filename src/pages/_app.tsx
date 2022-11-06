import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import SingUpModal from "../components/SingUpModal";
import { lightTheme, darkTheme } from "../utils/themes";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <NextThemesProvider
    defaultTheme="system"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className,
    }}
  >
    <NextUIProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Crea lunas con texto y descargalas" />
        <meta name="keywords" content="YouMakeAMoon LaOdiseaDLMemes" />
        <title>You Make A Moon</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <LoginModal />
      <SingUpModal />
    </NextUIProvider>
  </NextThemesProvider>
);

export default MyApp;
