import "./globals.css";
import { Header } from "@/components/layout/Header";




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="">
        <Header />
      
        </main>
        {children}
      </body>
    </html>
  );
}
