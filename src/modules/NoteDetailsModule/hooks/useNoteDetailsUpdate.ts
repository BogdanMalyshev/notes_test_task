import { useMutation } from "react-query";
import { useContext } from "react";

import { Note } from "models/notes";
import { AlertContex } from "components/AlertProvider";
import { queryClient } from "api";
import { noteDetailsService, noteDetailsKeys } from "../api";

type UseNoteDetailsUpdateType = () => {
  isLoading: boolean;
  onNoteDetailsUpdate: (updatedNote: Note) => Promise<void>;
};

export const useNoteDetailsUpdate: UseNoteDetailsUpdateType = () => {
  const alertContext = useContext(AlertContex);

  const { mutateAsync, isLoading } = useMutation({
    mutationKey: noteDetailsKeys.updateNote,
    mutationFn: async (updatedNote: Note) => {
      return await noteDetailsService.updateNote(updatedNote);
    },
    onError() {
      alertContext?.handleOpen({
        message: "Sorry... Something went wrong(",
        type: "error"
      });
    }
  });

  const onNoteDetailsUpdate = async (updatedNote: Note) => {
    await mutateAsync(updatedNote);
    await queryClient.refetchQueries([noteDetailsKeys.getNoteById, updatedNote.id]);
  };

  return {
    isLoading,
    onNoteDetailsUpdate
  };
};
