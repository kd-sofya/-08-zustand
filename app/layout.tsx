import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "NoteHub — Твій розумний менеджер нотаток",
  description:
    "Зберігайте свої ідеї, завдання та думки в одному зручному місці з NoteHub.",
  openGraph: {
    title: "NoteHub — Твій розумний менеджер нотаток",
    description:
      "Зберігайте свої ідеї, завдання та думки в одному зручному місці з NoteHub.",
    url: "https://note-hub-five.vercel.app", 
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub Preview Image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="uk" className={roboto.variable}>
      <body style={{ fontFamily: "var(--font-roboto), sans-serif" }}>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {modal}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}