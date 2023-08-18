import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

type AlertState = {
  open: boolean;
  type: "error" | "success";
  message: string;
};

const initialAlertState: AlertState = {
  open: false,
  type: "success",
  message: ""
};

type HandleOpen = (props: Omit<AlertState, "open">) => void;

export const AlertContex = createContext<{ handleOpen: HandleOpen } | null>(null);

type AlertProviderProps = {
  children: React.ReactNode;
};

export const AlertProvider = (props: AlertProviderProps) => {
  const { children } = props;
  const [state, setState] = useState<AlertState>(initialAlertState);

  const handleOpen: HandleOpen = ({ type, message }) => {
    setState({
      open: true,
      type,
      message: message
    });
  };

  const handleClose = () => {
    setState(initialAlertState);
  };

  return (
    <AlertContex.Provider value={{ handleOpen }}>
      {children}
      <Snackbar open={state.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={state.type}>
          {state.message}
        </Alert>
      </Snackbar>
    </AlertContex.Provider>
  );
};
