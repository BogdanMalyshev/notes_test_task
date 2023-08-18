import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { NotesPage } from "pages/Notes";
import { NotePage } from "pages/Note";
import { routes } from "./routes";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.notes()} element={<NotesPage />} />
        <Route path={routes.notesId(":noteId")} element={<NotePage />} />
        <Route path="*" element={<Navigate to={routes.notes()} />} />
      </Routes>
    </BrowserRouter>
  );
}
