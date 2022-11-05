import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import Header from "../components/Header";
import Footer from "../components/Footer";
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
        <Header />
        <Component {...pageProps} />
        <Footer/>
      </NextUIProvider>
    </NextThemesProvider>
  )

export default MyApp;
