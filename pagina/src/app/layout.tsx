import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Poppins } from "next/font/google";
import { CartProvider } from "@/context/CartContext";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          {/* Faz o main crescer para empurrar o footer */}
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
