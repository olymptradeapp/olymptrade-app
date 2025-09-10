import "@/public/assets/libs/bootstrap/css/bootstrap.min.css";
import "@/public/assets/libs/line-awesome/css/line-awesome.min.css";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/public/assets/css/style.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Olymp Trade App – A Smarter Way to Trade",
  description:
    "Download the Olymp Trade App and start trading smarter with a secure, easy-to-use platform. Access global markets, manage investments, and trade anytime, anywhere.",
  keywords: [
    "Olymp Trade",
    "olymp trade app",
    "olymp trade download",
    "olymp trade trading",
    "olymp trade mobile app",
    "olymp trade login",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" }, // default
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
