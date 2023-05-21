import { ButtonStyled } from "./GoBack.styled";


export const GoBackButton = ({ to, children }) => {
  return <ButtonStyled to={to}>{children}</ButtonStyled>;
};


