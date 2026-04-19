import axios from 'axios';
import { Note, NoteDraft } from '../../types/note'; 


interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesParams {
  tag?: string;
  page?: number;
  perPage?: number;
  search?: string;
}

const BASE_URL = 'https://6709849daf1a3991baa13916.mockapi.io/api/notes';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchNotes = async ({
  tag,
  page = 1,
  perPage = 10,
  search = '',
}: FetchNotesParams): Promise<NotesResponse> => {
  const params = new URLSearchParams();
  if (tag) params.append('tag', tag);
  if (search) params.append('search', search);
  params.append('page', String(page));
  params.append('limit', String(perPage));

  const { data } = await api.get<Note[]>(`?${params.toString()}`);

  return {
    notes: data,
    totalPages: 5,
  };
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get<Note>(`/${id}`);
  return data;
};

export const createNote = async (noteData: NoteDraft): Promise<Note> => {
  const { data } = await api.post<Note>('/', noteData);
  return data;
};