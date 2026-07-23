import type { Metadata } from "next";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "MSP Solution - Professional IT & Tech Services",
  description: "MSP Solution offers comprehensive IT services, software development, and digital transformation for businesses. Contact us: info@mspsolution.com.np | Phone: +977 9867143463 | Subidhanagar, Kathmandu.",
  keywords: "MSP Solution, IT services, software development, Kathmandu, Subidhanagar, web development, app development",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* testing */}
      <body className="antialiased">
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster position="top-right" richColors />
        </div>
      </body>
    </html>
  );
}
