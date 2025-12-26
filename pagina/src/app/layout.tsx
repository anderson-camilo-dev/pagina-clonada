import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // opcional, mas recomendado
  display: "swap", // opcional, melhora performance
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
