import { Fustat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ConvexClientProvider } from "../convex/client";

const fustat = Fustat({
  subsets: ["latin"],
  variable: "--font-fustat",
  display: "swap",
});

export const metadata = {
  title: "Todo Apps",
  description: "Track your day to day tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fustat.variable}>
      <body>
        <Navbar />
        <ConvexClientProvider>
          <div className="max-w-[1440px] mx-auto px-4">{children}</div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
