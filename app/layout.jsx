import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Rank vs Branch vs Cutoff Predictor (2024) | Phodu Club",
  description:
    "Predict your Rank, Branch & Cutoff for BITSAT, COMEDK, VITEEE, MET & SRMJEEE (2024) with Phodu Club's free Rank Predictor.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
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
        </div>
      </body>
    </html>
  );
}
