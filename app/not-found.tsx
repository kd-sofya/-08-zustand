import { Metadata } from "next";
import css from "./Home.module.css";

export const metadata: Metadata = {
  title: "Сторінку не знайдено | NoteHub",
  description:
    "На жаль, такої сторінки не існує. Поверніться на головну сторінку NoteHub.",
  openGraph: {
    title: "Сторінку не знайдено | NoteHub",
    description:
      "На жаль, такої сторінки не існує. Поверніться на головну сторінку NoteHub.",
    url: "https://note-hub-five.vercel.app/404",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub 404 Error",
      },
    ],
  },
};

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <h1 className={css.title}>404 - Сторінку не знайдено</h1>
      <p className={css.description}>
        Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
      </p>
    </div>
  );
};

export default NotFound;