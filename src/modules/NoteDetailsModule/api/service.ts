import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { db } from "api";
import { Note } from "models/notes";

class NoteDetailsService {
  public async getNoteById(noteId: string): Promise<Note | void> {
    const docRef = doc(db, "notes", noteId);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? ({ ...docSnap.data(), id: docSnap.id } as Note) : undefined;
  }

  public async updateNote(note: Note): Promise<void> {
    await setDoc(doc(db, "notes", note.id), note);
  }
}

export const noteDetailsService = new NoteDetailsService();
