import { useMutation } from "react-query";
import { useContext } from "react";
import { AlertContex } from "components/AlertProvider";
import { Note } from "models/notes";
import { createNoteService, createNoteKeys } from "../api";

type UseNoteDetailsUpdateType = () => {
  isLoading: boolean;
  onNoteCreate: () => Promise<Note | void>;
};

export const useNoteCreate: UseNoteDetailsUpdateType = () => {
  const alertContext = useContext(AlertContex);

  const { mutateAsync, isLoading } = useMutation({
    mutationKey: createNoteKeys.createNote,
    mutationFn: async () => {
      return await createNoteService.createNote();
    },
    onError() {
      alertContext?.handleOpen({
        message: "Sorry... Something went wrong(",
        type: "error"
      });
    }
  });

  const onNoteCreate = async () => {
    return await mutateAsync();
  };

  return {
    isLoading,
    onNoteCreate
  };
};
