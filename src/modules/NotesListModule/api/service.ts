import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "api";
import { Note } from "models/notes";

class NotesListService {
  public async getNotesList(filterTags: string[]): Promise<Note[]> {
    const notesCol = collection(db, "notes");
    const noteSnapshot = await getDocs(notesCol);
    const notesList = noteSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id
      } as Note;
    });

    if (filterTags.length) {
      const filteredNotesList = notesList.filter((note) => {
        const tags = new Set(note.tags);

        for (let i = 0; i < filterTags.length; i++) {
          const filterTag = filterTags[i];
          if (!tags.has(filterTag)) {
            return false;
          }
        }

        return true;
      });

      return filteredNotesList;
    }

    return notesList;
  }
}

export const notesListService = new NotesListService();
