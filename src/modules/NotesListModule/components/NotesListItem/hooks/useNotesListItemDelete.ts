import { useMutation } from "react-query";
import { useContext } from "react";

import { AlertContex } from "components/AlertProvider";
import { queryClient } from "api";
import { notesListKeys } from "modules/NotesListModule/api";
import { notesListItemService, notesListItemKeys } from "../api";

type useNotesListItemDeleteType = () => {
  isLoading: boolean;
  onDeleteNoteListItem: (noteId: string) => void;
};

export const useNotesListItemDelete: useNotesListItemDeleteType = () => {
  const alertContext = useContext(AlertContex);

  const { isLoading, mutateAsync } = useMutation({
    mutationKey: notesListItemKeys.deleteNoteById,
    mutationFn: async (noteId: string) => {
      return await notesListItemService.deleteNoteById(noteId);
    },
    onError() {
      alertContext?.handleOpen({
        message: "Sorry... Something went wrong(",
        type: "error"
      });
    }
  });

  const onDeleteNoteListItem = async (noteId: string) => {
    await mutateAsync(noteId);
    await queryClient.refetchQueries(notesListKeys.getNotesList);
  };

  return {
    isLoading,
    onDeleteNoteListItem
  };
};
