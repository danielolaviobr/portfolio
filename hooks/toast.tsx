import SuccessToast from "components/SuccessToast";
import React from "react";
import create from "zustand";

type UseToastProps = {
  toasts: Array<ToastData>;
  addPositiveToast: (
    message: ToastData["message"],
    status: ToastData["status"],
    time?: number
  ) => void;
  removeFirst: () => void;
};

interface ToastData {
  message: string;
  status: "success" | "error" | "info";
}

export const useToast = create<UseToastProps>((set, get) => ({
  toasts: [],
  addPositiveToast: (message, status, time = 3000) => {
    const newToasts = get().toasts;
    newToasts.push({ message, status });
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
