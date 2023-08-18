import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../configs/reactQuery.config";

type QueryProviderProps = {
  children: React.ReactNode;
};

export const ApiProvider = (props: QueryProviderProps) => {
  const { children } = props;

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
