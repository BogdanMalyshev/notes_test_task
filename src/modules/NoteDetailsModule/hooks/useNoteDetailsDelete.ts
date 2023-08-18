import { useMutation } from "react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AlertContex } from "components/AlertProvider";
import { noteDetailsService, noteDetailsKeys } from "../api";
import { routes } from "router/routes";

type UseNoteDetailsDeleteType = () => {
  isLoading: boolean;
  onDeleteNote: (noteId: string) => Promise<void>;
};

export const useNoteDetailsDelete: UseNoteDetailsDeleteType = () => {
  const alertContext = useContext(AlertContex);
  const navigate = useNavigate();

  const { isLoading, mutateAsync } = useMutation({
    mutationKey: noteDetailsKeys.deleteNoteById,
    mutationFn: async (noteId: string) => {
      return await noteDetailsService.deleteNoteById(noteId);
    },
    onError() {
      alertContext?.handleOpen({
        message: "Sorry... Something went wrong(",
        type: "error"
      });
    }
  });

  const onDeleteNote = async (noteId: string) => {
    await mutateAsync(noteId);
    navigate(routes.notes());
  };

  return {
    isLoading,
    onDeleteNote
  };
};
