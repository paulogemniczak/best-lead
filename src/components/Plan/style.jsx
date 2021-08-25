import styled, { css } from "styled-components";

export const Plan = styled.div`
  /* border: 1.5px solid rgba(0, 0, 0, 0.084); */
  min-width: 240px;
  max-width: 300px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
export const PlanName = styled.h2`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.small};
    text-align: center;
    color: ${theme.colors.white};
    font-weight: bold;
    font-size: 28px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.084);
    margin-bottom: 0;
  `}
`;
export const Price = styled.div`
  text-align: center;
  min-height: 79px;
  ${({ theme }) => css`
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.084);
  `}
  .on-demand {
    font-size: 32px;
    color: #4c5166;
    font-weight: bold;
  }
`;
export const Currency = styled.span`
  position: relative;
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: normal;
    font-size: 14px;
    top: -26px;
  `}
`;
export const Integer = styled.span`
  position: relative;
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: bold;
    font-size: 52px;
  `}
`;
export const Decimal = styled.span`
  position: relative;
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: bold;
    font-size: 18px;
    top: -24px;
  `}
`;
export const Time = styled.span`
  position: relative;
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-weight: normal;
    font-size: 10px;
    font-style: italic;
    margin-left: -22px;
  `}
`;
export const Benefits = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  margin-bottom: 0;
  ${({ theme }) => css`
    li {
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.white};
      padding: ${theme.spacings.xsmall};
      border-bottom: 1px solid rgba(0, 0, 0, 0.084);
      &:last-child {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: none;
        text-transform: uppercase;
        font-weight: bolder;
      }
    }
  `}
`;
