import { FC, ReactNode, useState } from 'react';
import { ToggleContext } from '../Contexts/ToggleContext';

interface Props {
  children: ReactNode;
}

export const ToggleProvider: FC<Props> = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleTrue = () => {
    setIsToggled(true);
    console.log(isToggled);
  };

  const toggleFalse = () => {
    setIsToggled(false);
    console.log(isToggled);
  };

  return (
    <ToggleContext.Provider value={{ isToggled, toggleFalse, toggleTrue }}>
      {children}
    </ToggleContext.Provider>
  );
};
