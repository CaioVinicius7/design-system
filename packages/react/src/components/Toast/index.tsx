import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import { ReactNode } from "react";

import {
  ToastCloseButton,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport
} from "./styles";

interface ToastProviderProps {
  children: ReactNode;
  swipeDirection: "down" | "left" | "right" | "up";
}

function ToastProvider({ children, swipeDirection }: ToastProviderProps) {
  return (
    <ToastPrimitive.Provider swipeDirection={swipeDirection} label="teste">
      {children}
    </ToastPrimitive.Provider>
  );
}

export interface ToastProps {
  title: string;
  description: string;
  open: boolean;
  close: () => void;
}

export function ToastElement({ title, description, open, close }: ToastProps) {
  return (
    <>
      <ToastRoot open={open}>
        <ToastTitle> {title} </ToastTitle>
        <ToastDescription>{description}</ToastDescription>

        <ToastCloseButton onClick={close} asChild>
          <X weight="bold" />
        </ToastCloseButton>
      </ToastRoot>

      <ToastViewport />
    </>
  );
}

export const Toast = {
  Provider: ToastProvider,
  Element: ToastElement
};
