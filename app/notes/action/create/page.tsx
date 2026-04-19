import { Metadata } from 'next';
import React from 'react';
import css from './CreateNote.module.css';


import NoteFormWrapper from '../../../../components/NoteForm/NoteFormWrapper';

export const metadata: Metadata = {
  title: 'Create Note | NoteHub',
  description: 'Create a new note to stay organized.',
  openGraph: {
    title: 'Create Note | NoteHub',
    description: 'Create a new note to stay organized.',
    type: 'website',
    url: 'https://your-domain.com/notes/action/create',
    images: [
      {
        url: '/images/og-create-note.jpg', 
        width: 1200,
        height: 630,
        alt: 'Create Note interface preview',
      },
    ],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteFormWrapper />
      </div>
    </main>
  );
}