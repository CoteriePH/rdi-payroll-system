import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { theme } from "@/theme";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "@/layouts/MainLayout";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {router.pathname.includes("/auth") ? (
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
