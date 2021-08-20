import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;
export const Title = styled.h5`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.xsmall};
  `}
`;
export const Text = styled.p`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.xxsmall};
  `}
`;
