import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../globalStyles/theme";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #373737;
  > nav {
    display: flex;
    gap: 12px;
  }
`;

export const Link = styled(NavLink)`
  padding: 14px;
  min-width: 100px;
  border-radius: 10px;
  box-shadow: ${theme.boxShadow.button};
  cursor: pointer;

  font-weight: ${theme.fontWeight.semiBold};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;

  color: ${theme.colors.mainText};
  background-color: ${theme.colors.accent};

  transition: ${theme.transition.main};

  &.active {
    color: ${theme.colors.accent};
    background-color: ${theme.colors.background};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${theme.colors.secondaryAccent};
  }
`;
