import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #e8e8e8;
  padding: 54px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 5rem;
    font-weight: bolder;
    color: rgb(76, 76, 76);
  `}
`;
export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: normal;
    color: rgb(76, 76, 76);
    margin-top: 24px;
  `}
`;
export const Button = styled.button`
  ${({ theme }) => css`
    margin-top: 16px;
    width: 100%;
    max-width: 300px;
    background-color: #075E54;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    border: none;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    transition: background-color 0.2s ease-in-out;
    &:hover {
      /* background-color: #1ba08c; */
    }
  `}
`;
