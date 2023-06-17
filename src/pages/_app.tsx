import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--alexandria",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${alexandria.className}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
