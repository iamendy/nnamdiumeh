import { createContext, useState, SetStateAction, Dispatch } from "react";

interface ToggleContext {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

export const toggleContext = createContext<ToggleContext>({
  toggle: false,
  setToggle: () => {},
});

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
