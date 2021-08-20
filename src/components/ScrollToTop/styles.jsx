import styled, { css } from "styled-components";

export const ScrollTop = styled.span`
  width: 40px;
  height: 40px;
  background-color: #333;
  position: fixed;
  bottom: 0;
  right: 5vw;
  border-radius: 4px 4px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: background-color 0.085s ease;
  ${({ theme }) => css`
    &:hover {
      background-color: ${theme.colors.primary};
    }
  `}
`;
