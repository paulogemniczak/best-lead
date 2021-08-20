import styled, { css } from "styled-components";

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 40px;
    text-align: center;
  `}
  @media only screen and (max-width: 599px) {
    font-size: min(40px, 8vw) !important;
  }
`;
export const Subtitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
  `}
  @media only screen and (max-width: 599px) {
    font-size: min(2rem, 5vw) !important;
  }
`;
export const Line = styled.span`
  ${({ theme }) => css`
    width: 120px;
    height: 2px;
    background-color: ${theme.colors.primary};
    margin-top: 16px;
  `}
`;
