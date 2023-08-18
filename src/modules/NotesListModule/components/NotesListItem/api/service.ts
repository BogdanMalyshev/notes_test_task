import { deleteDoc, doc } from "firebase/firestore/lite";
import { db } from "api";

class NotesListItemService {
  public async deleteNoteById(noteId: string): Promise<void> {
    return await deleteDoc(doc(db, "notes", noteId));
  }
}

export const notesListItemService = new NotesListItemService();
