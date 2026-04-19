'use client';

import dynamic from 'next/dynamic';

const NoteForm = dynamic(() => import('./NoteForm'), {
  ssr: false,
  loading: () => <p>Loading form...</p>,
});

export default function NoteFormWrapper() {
  return <NoteForm />;
}