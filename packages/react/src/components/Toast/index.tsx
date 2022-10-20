import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import { Dispatch, ReactNode, SetStateAction } from "react";

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
  duration: number;
}

function ToastProvider({
  children,
  swipeDirection,
  duration
}: ToastProviderProps) {
  return (
    <ToastPrimitive.Provider
      swipeDirection={swipeDirection}
      duration={duration}
    >
      {children}
    </ToastPrimitive.Provider>
  );
}

export interface ToastProps {
  title: string;
  description: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  close: () => void;
}

function ToastElement({
  title,
  description,
  open,
  setOpen,
  close
}: ToastProps) {
  return (
    <>
      <ToastRoot open={open} onOpenChange={setOpen}>
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
