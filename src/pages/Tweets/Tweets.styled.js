import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkGoBack = styled(Link)`
  display: block;
  min-width: 60px;
  max-width: 140px;
  padding: 4px;
  font-weight: 500;
  border-radius: 4px;
  margin-bottom: 16px;
  text-decoration: none;
  color: black;

  &:hover:not(.active),
  &:focus:not(.active) {
    color: pink;
  }
`;

export const BoxTweets = styled.div`
  margin-top: 15px;
`;

export const WrapperLoadMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonLoadMore = styled.button`
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
  border: 1px solid ${({ theme }) => theme.colors.secondaryAccent};
  border-radius: 10.3108px;
  background-color: ${({ theme }) => theme.colors.secondaryAccent};
  box-shadow: ${({ theme }) => theme.boxShadow.button};
`;
