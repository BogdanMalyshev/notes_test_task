import { useQuery } from "react-query";
import { useContext } from "react";

import { Note } from "models/notes";
import { AlertContex } from "components/AlertProvider";
import { notesListService, notesListKeys } from "../api";

type UseNotesListQueryType = (tags: string[]) => {
  isLoading: boolean;
  data: Note[];
  refetch: () => void;
};

export const useNotesListQuery: UseNotesListQueryType = (tags) => {
  const alertContext = useContext(AlertContex);

  const { data, isLoading, refetch } = useQuery<Note[]>([notesListKeys.getNotesList, tags], {
    queryFn: async () => {
      return await notesListService.getNotesList(tags);
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
    data: data || [],
    refetch
  };
};
