import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { ToggleContextProvider } from "@/contexts/ToggleContext";
import SEOHead from "../components/SEOHead";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEOHead />
      <main className={`${alexandria.className} relative min-h-screen`}>
        <ToggleContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ToggleContextProvider>
      </main>
    </>
  );
}
