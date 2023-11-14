import { FC, ReactNode, useState } from 'react';
import { ToggleContext } from '../Contexts/ToggleContext';

interface Props {
  children: ReactNode;
}

export const ToggleProvider: FC<Props> = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleFunc = (toggle: boolean) => {
    setIsToggled(toggle);
  };

  return (
    <ToggleContext.Provider value={{ isToggled, toggleFunc }}>{children}</ToggleContext.Provider>
  );
};
