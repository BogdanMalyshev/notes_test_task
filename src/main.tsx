import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "router";
import { Layout } from "components/Layout";
import { ApiProvider } from "api";
import { AlertProvider } from "components/AlertProvider";
import "./main.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApiProvider>
    <AlertProvider>
      <Layout>
        <Router />
      </Layout>
    </AlertProvider>
  </ApiProvider>
);
