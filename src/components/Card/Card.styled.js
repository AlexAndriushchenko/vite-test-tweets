import styled from "styled-components";
import background from "../../assets/images/background.png";
import { theme } from "../../globalStyles/theme";

export const CardStyled = styled.div`
  position: relative;
  margin: 0 auto;
  width: 380px;
  padding: 28px 36px 36px 36px;
  text-align: center;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  border-radius: 20px;
`;

export const LogoStyled = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const UpperContainer = styled.div`
  height: 168px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Text = styled.p`
  line-height: 1.2;

  margin-bottom: 16px;
  font-size: ${theme.fontSizes.m};
  text-align: center;
  text-transform: uppercase;

  color: ${theme.colors.accent};

  :not(:last-of-type) {
    margin-bottom: 16px;
  }

  :last-of-type {
    margin-bottom: 26px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 14px 28px;
  min-width: 196px;
  cursor: pointer;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainText};
  border: 1px solid
    ${({ theme, name }) =>
      name === "Follow" ? theme.colors.accent : theme.colors.secondaryAccent};
  border-radius: 10.3108px;
  background-color: ${({ theme, name }) =>
    name === "Follow" ? theme.colors.accent : theme.colors.secondaryAccent};
  box-shadow: ${({ theme }) => theme.boxShadow.button};
`;
