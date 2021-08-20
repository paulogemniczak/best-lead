import styled, { css } from "styled-components";

export const Section = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

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
export const TextPrimary = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: bold;
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
export const Button = styled.button`
  ${({ theme }) => css`
    text-transform: uppercase;
    width: 100%;
    max-width: 400px;
    border: none;
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    &.outline {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};
      width: 100%;
    }
  `}
`;
