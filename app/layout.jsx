import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Rank vs Branch vs Cutoff Predictor (2024) | Phodu Club",
  description:
    "Predict your Rank, Branch & Cutoff for BITSAT, COMEDK, VITEEE, MET & SRMJEEE (2024) with Phodu Club's free Rank Predictor.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={inter.className}
        style={{
          height: "100%",
          margin: "0",
          padding: "0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
          }}
        >
          <main style={{ flex: "1 0 auto" }}>{children}</main>
          <Footer style={{ flexShrink: "0" }} />
        </div>
      </body>
    </html>
  );
}
