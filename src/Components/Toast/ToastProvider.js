import React, { useState, useMemo, useId } from 'react';
import { createPortal } from 'react-dom';
import { ToastContext } from './ToastContext';
import { Toast } from './Toast';

export const ToastProvider = (props) => {
  const generateUEID = useId();

  const [toasts, setToasts] = useState([]);

  const open = (content) =>
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: generateUEID, content },
    ]);

  const close = (id) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );

  const contextValue = useMemo(() => ({ open }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
        <div className="toasts-wrapper">
          {toasts.map((toast) => (
            <Toast key={toast.id} close={() => close(toast.id)}>
              {toast.content}
            </Toast>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
