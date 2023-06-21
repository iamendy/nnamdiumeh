import { createContext, useState } from "react";

export const toggleContext = createContext(null);

export const ToggleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <toggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </toggleContext.Provider>
  );
};

export default toggleContext;
