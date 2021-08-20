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
    max-width: 400px;
    border: none;
    background-color: #1ebea5;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `}
`;
export const Line = styled.span`
  ${({ theme }) => css`
    width: 120px;
    height: 2px;
    background-color: ${theme.colors.primary};
    margin-top: 16px;
  `}
`;
