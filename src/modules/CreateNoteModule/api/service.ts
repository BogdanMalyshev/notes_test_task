import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { db } from "api";
import { Note } from "models/notes";

class CreateNoteService {
  public async createNote(): Promise<Note | void> {
    const noteRef = doc(db, "notes", new Date().getTime().toString());
    await setDoc(noteRef, {
      title: "title",
      content: "content",
      tags: []
    });
    const docSnap = await getDoc(noteRef);

    return docSnap.exists() ? ({ ...docSnap.data(), id: docSnap.id } as Note) : undefined;
  }
}

export const createNoteService = new CreateNoteService();
