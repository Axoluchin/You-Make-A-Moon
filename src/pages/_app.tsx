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
        <title>You Make A Moon</title>
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
