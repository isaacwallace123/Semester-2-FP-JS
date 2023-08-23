import React from 'react';
import { createRoot } from 'react-dom/client';

import "./assets/index.css";

import { BrowserRouter } from "react-router-dom";

import CartProvider from "./CartProvider";
import { SnackbarProvider } from 'notistack'

import App from './app';

createRoot(document.getElementById("root")).render(
  <SnackbarProvider autoHideDuration={3000} maxSnack={5}>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </SnackbarProvider>
);