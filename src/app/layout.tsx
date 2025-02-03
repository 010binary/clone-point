import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import ModalProvider from "@/components/modal/ModalProvider";
import ReduxProvider from "./redux-provider";
import Devlogin from "./dev-login";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FINMAN",
  description: "from E-Zone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <ReduxProvider>
          <Layout>
            <Devlogin>
            <ModalProvider>
              {children}
            </ModalProvider>
            </Devlogin>
          </Layout>
        </ReduxProvider>
      </body>
    </html>
  );
}
