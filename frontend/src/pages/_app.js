import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { theme } from "@/theme";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "@/layouts/MainLayout";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Head>
              <title>RDI Payroll System</title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
            <ToastContainer />
            {router.pathname.includes("/auth") ||
            router.pathname.includes("/scan-qr-code") ? (
              <Component {...pageProps} />
            ) : (
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            )}
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
