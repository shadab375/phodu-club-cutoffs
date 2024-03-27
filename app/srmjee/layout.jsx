import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "SRMJEEE Rank vs Branch vs Cutoff Predictor (2024)",
  description:
    "Our SRMJEEE Rank vs Branch vs Cutoff Predictor Tool can help you estimate your potential rank & explore branch options based on previous year's cut-offs.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
