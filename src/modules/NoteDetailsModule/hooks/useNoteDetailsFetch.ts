import { useQuery } from "react-query";
import { useContext } from "react";

import { Note } from "models/notes";
import { AlertContex } from "components/AlertProvider";
import { noteDetailsService, noteDetailsKeys } from "../api";

type UseNoteDetailsFetchType = (noteId: string) => {
  isLoading: boolean;
  data: Note | void;
};

export const useNoteDetailsFetch: UseNoteDetailsFetchType = (noteId) => {
  const alertContext = useContext(AlertContex);

  const { data, isLoading } = useQuery<Note | void>([noteDetailsKeys.getNoteById, noteId], {
    queryFn: async () => {
      return await noteDetailsService.getNoteById(noteId);
    },
    onError() {
      alertContext?.handleOpen({
        message: "Sorry... Something went wrong(",
        type: "error"
      });
    }
  });

  return {
    isLoading,
    data
  };
};
