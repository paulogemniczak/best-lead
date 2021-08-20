import styled, { css } from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  box-shadow: rgb(2 8 20 / 6%) 0px 1px 3px, rgb(2 8 20 / 4%) 0px 1px 2px;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
  `}
`;
export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      list-style: none;
      li {
        a {
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
          color: ${theme.colors.secondary};
          &:hover {
            color: ${theme.colors.primary};
          }
        }
      }
    }
  `}
`;
