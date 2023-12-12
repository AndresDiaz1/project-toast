import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastsList] = React.useState([]);
  const handleEscape = React.useCallback(() => {
    setToastsList([]);
  });
  useEscapeKey(handleEscape);

  function createToast(message, variant) {
    const nextToasts = [
      ...toastList,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToastsList(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toastList.filter((toast) => {
      return toast.id !== id;
    });
    setToastsList(nextToasts);
  }

  const value = {
    toastList,
    createToast,
    dismissToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
