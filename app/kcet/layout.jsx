import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "KCET Rank vs Branch vs Cutoff Predictor (2024)",
  description:
    "Our KCET Rank vs Branch vs Cutoff Predictor Tool can help you estimate your potential rank & explore branch options based on previous year's cut-offs.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
        </div>
      </body>
    </html>
  );
}
