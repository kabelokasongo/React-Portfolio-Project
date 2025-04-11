import { createContext, useContext, useState } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: "success", // Can be "success" or "error"
    message: "Thank you for reaching out", // Message to display in the alert
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) =>
          setState({ isOpen: true, type, message }),
        onClose: () =>
          setState({ isOpen: false, type: "", message: "" }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlertContext must be used within an AlertProvider");
  }
  return context;
};