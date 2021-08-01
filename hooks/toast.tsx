import SuccessToast from "components/Toast";
import React from "react";
import { ToastData } from "types/Toast";
import create from "zustand";
import { v4 as uuid } from "uuid";

type UseToastProps = {
  toasts: Array<ToastData>;
  addToast: (
    message: ToastData["message"],
    status: ToastData["status"],
    time?: number
  ) => void;
  removeFirst: () => void;
};

export const useToast = create<UseToastProps>((set, get) => ({
  toasts: [],
  addToast: (message, status, time = 3000) => {
    const newToasts = get().toasts;
    newToasts.push({ message, status, id: uuid() });
    set({
      toasts: newToasts,
    });
    setTimeout(() => {
      get().removeFirst();
    }, time);
  },
  removeFirst: () => {
    const newToasts = get().toasts;
    newToasts.shift();
    set({
      toasts: newToasts,
    });
  },
}));
